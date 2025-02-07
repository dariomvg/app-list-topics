# HACER

> agregar loadings en /topic, /, 
> CREAR README
> PRUEBAS, DEPLOY





CREATE TABLE list (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    details VARCHAR(160) NOT NULL,
    link VARCHAR(100) NOT NULL,
    comments JSONB,
    range INTEGER NOT NULL,
    creator VARCHAR(100) NOT NULL
) 


INSERT INTO list (title, details, link, comments, range, creator) 
VALUES (
    'Que es la fisica cuantica', 
    'que temas trata de explicar, que áreas de la física aborda, quienes son los mayores referentes de esta teoría', 
    'que-es-la-fisica-cuantica', 
    '[
        {
            "id": "0",
            "user": "Dariogod",
            "date": "11/01/2025",
            "comment": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates architecto commodi magni voluptas expedita perferendis porro, placeat optio cupiditate ipsam est in ex tenetur, reprehenderit sequi vitae dolorem eligendi corporis?"
        }
    ]'::jsonb, 
    2, 
    'pepe'
);


const objTest = [
  {
    id: 0,
    title: "Que es la fisica cuantica",
    details:
      "que temas trata de explicar, que áreas de la física aborda, quienes son los mayores referentes de esta teoría",
    link: "que-es-la-fisica-cuantica",
    range: 1,
    creator: "pepe",
    comments: [
      {
        id: 0,
        user: "Dariogod",
        date: "11/01/2025",
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates architecto commodi magni voluptas expedita perferendis porro, placeat optio cupiditate ipsam est in ex tenetur, reprehenderit sequi vitae dolorem eligendi corporis?",
      },
    ],
  },
  {
    id: 1,
    title: "Programacion desde cero",
    details:
      "que problemas busca solucionar, en que ramas del mundo IT interviene, que significa programar y como empezar desde cero",
    link: "programacion-desde-cero",
    range: 2,
    creator: "pepito",
    comments: [
      {
        id: 0,
        user: "pepitogod",
        date: "12/01/2025",
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates architecto commodi magni voluptas expedita perferendis porro, placeat optio cupiditate ipsam est in ex tenetur, reprehenderit sequi vitae dolorem eligendi corporis?",
      },
      {
        id: 1,
        user: "pepe",
        date: "13/02/2025",
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates architecto commodi magni voluptas expedita",
      },
    ],
  },
];


