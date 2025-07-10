TRUNCATE TABLE beneficio RESTART IDENTITY;

INSERT INTO beneficio (titulo, descricao, icon) VALUES
  ('parcelamento', 'Parcele suas compras em até 10x sem juros no cartão.', 'IconCreditCard'),
  ('ENTREGA RÁPIDA', 'Receba seus produtos com agilidade e segurança em todo o Brasil.', 'IconCubeSend'),
  ('atendimento', 'Fale com a gente pelo WhatsApp ou Instagram a qualquer hora.', 'IconDeviceDesktop');
