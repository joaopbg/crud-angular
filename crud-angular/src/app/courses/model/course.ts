///criando interface de acordo com aula
///essa interface sera utilizada para padronizar o tipo de dado da lista de curso
/// vantagem: vai criar uma intellisense para nosso tipo de dado
/// boa pratica

export interface Course {
  _id: string; //mongoDB usa PK como String - mas pode ser number tb
  name: string; //nome do curso String com S maiusculo é o Objeto do JS
  category: string;
}
