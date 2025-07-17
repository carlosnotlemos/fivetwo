TRUNCATE TABLE faqs RESTART IDENTITY;

INSERT INTO faqs (pergunta, resposta) VALUES
  ('Qual o prazo para entrega do meu pedido?', 'O prazo de entrega é de 7 a 10 dias úteis após a confirmação do pagamento.'),
  ('Posso trocar ou devolver um produto?', 'Sim! Você tem até 30 dias para solicitar troca ou devolução, desde que o produto esteja em perfeito estado.'),
  ('Como faço para acompanhar o status do meu pedido?', 'Após o envio, você receberá um código de rastreamento por e-mail para acompanhar a entrega.'),
  ('Quais formas de pagamento são aceitas?', 'Aceitamos cartão de crédito, boleto bancário e Pix.'),
  ('Posso trocar ou devolver um produto?', 'Sim! Você tem até 30 dias para solicitar troca ou devolução, desde que o produto esteja em perfeito estado.');