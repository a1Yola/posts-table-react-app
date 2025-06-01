import type { FieldConfig } from "../types";

export const postFields: FieldConfig[] = [
  {
    name: "title",
    label: "Название поста",
    placeholder: "Название",
    type: "text",
    required: true,
    min: 3,
    max: 100,
  },
  {
    name: "author",
    label: "Автор",
    placeholder: "Имя автора",
    type: "text",
    required: true,
    min: 2,
    max: 50,
  },
  {
    name: "views",
    label: "Число просмотров",
    placeholder: "Просмотры",
    type: "number",
    min: 0,
    defaultValue: 0,
  },
  {
    name: "tags",
    label: "Теги",
    placeholder: "Теги",
    type: "text",
    description: "Введите теги через пробел или запятую",
  },
  {
    name: "published",
    label: "Опубликовано",
    type: "boolean",
    defaultValue: false,
  },
];
