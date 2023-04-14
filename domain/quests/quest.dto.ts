import { DateTime } from 'luxon';

export class QuestDto {
  id: string;
  title?: string;
  description?: string;
  cover?: string;
  isFavorite: boolean;
  isCompleted: boolean;
  createdById: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  // elementOnQuest: ElementOnQuest[];
  // mainQuestOnQuest: QuestOnQuest[];
  // relatesToQuestOnQuest: QuestOnQuest[];
  constructor(data: Partial<QuestDto>) {
    if (data) Object.assign(this, data);
  }
}
