export default function BannerLg(){
  return (
    <header className="w-full pb-10">
    <img
      src="/bclaro.png"
      alt="Descrição da imagem"
      className="w-full h-auto object-cover "
      style={{maxHeight: '675px' }}
    />
    {/* <div className="bg-neutral-100 text-center text-sm sm:text-base font-medium text-gray-800 h-[30px] py-1 shadow">
      🎉 FiveTwo: 100% de desconto na primeira compra! 🎁
    </div> */}
  </header>
  );
}