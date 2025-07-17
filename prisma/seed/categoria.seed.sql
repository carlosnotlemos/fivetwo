TRUNCATE TABLE categorias RESTART IDENTITY;

INSERT INTO categorias (nome, subtitulo, imagemurl) VALUES
  ('DIA DOS PAIS' , 'Venha agradar seu pai com um presente', 'https://i.postimg.cc/TYGfWxZX/produto1.webp'),
  ('FEMININO', 'As melhores roupas femininas', 'https://i.postimg.cc/TYGfWxZX/produto1.webp'),
  ('MASCULINO', 'As melhores roupas masculinas', 'https://i.postimg.cc/TYGfWxZX/produto1.webp');
