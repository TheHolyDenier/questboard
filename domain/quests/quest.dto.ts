export class QuestDto {
  id: number;
  title: string;
  description: string;
  points: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<QuestDto>) {
    if (data) Object.assign(this, data);
  }
}
