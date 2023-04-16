import { ClassConstructor, plainToInstance } from 'class-transformer';
import { FormDataInterface } from '~/interfaces/form-data.interface';
import { useUser } from '~/stores/user.store';
import { ApiResponse } from '~/interfaces/api-response';

export class BaseService<T, C = null, U = null> {
  baseUrl: string;
  protected Dto: ClassConstructor<T>;
  protected CreateDto: ClassConstructor<C>;
  protected UpdateDto: ClassConstructor<U>;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async create(body: FormDataInterface): Promise<T> {
    const user = useUser();

    const result = await $fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user.token()
      },
      body: JSON.stringify(
        plainToInstance(this.CreateDto, body, {
          excludeExtraneousValues: true
        })
      )
    });

    return plainToInstance(this.Dto, (result as ApiResponse<T>).data);
  }

  async get(): Promise<T[]> {
    const user = useUser();

    const result = await $fetch(this.baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user.token()
      }
    });

    return ((result as ApiResponse<T>).data as T[]).map((item) =>
      plainToInstance(this.Dto, item)
    );
  }

  async getOne(id: string): Promise<T> {
    const user = useUser();

    const result = await $fetch(`${this.baseUrl}?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user.token()
      }
    });

    return plainToInstance(this.Dto, (result as ApiResponse<T>).data);
  }

  async delete(id: string): Promise<void> {
    const user = useUser();

    await $fetch(`${this.baseUrl}?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user.token()
      }
    });
  }
}
