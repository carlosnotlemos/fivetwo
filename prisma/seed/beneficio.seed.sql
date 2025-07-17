TRUNCATE TABLE beneficios RESTART IDENTITY;

INSERT INTO beneficios (titulo, descricao, icon) VALUES
  ('parcelamento', 'Parcele suas compras em até 10x sem juros no cartão.', 'IconCreditCard', 'https://i.postimg.cc/TYGfWxZX/produto1.webp'),
  ('ENTREGA RÁPIDA', 'Receba seus produtos com agilidade e segurança em todo o Brasil.', 'IconCubeSend', 'https://i.postimg.cc/TYGfWxZX/produto1.webp'),
  ('atendimento', 'Fale com a gente pelo WhatsApp ou Instagram a qualquer hora.', 'IconDeviceDesktop', 'https://i.postimg.cc/TYGfWxZX/produto1.webp');
