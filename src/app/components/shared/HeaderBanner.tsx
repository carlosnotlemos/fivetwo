export default function HeaderBanner(){
  return (
    <header className="w-full pb-10">
      <img
        src="/bclaro.png"
        alt="Descrição da imagem"
        className="w-full h-auto object-cover "
        style={{maxHeight: '675px' }}
      />
    </header>
  );
}