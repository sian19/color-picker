# Gerador de cores
Projeto para gerar qualquer cor feito em React.
<h3>Imagem do projeto:</h3>
<img src="https://github.com/sian19/color-picker/blob/master/src/assets/img.png">
<p>Um projeto onde o usuário pode gerar um código em RGB para usar em seus projetos no css, onde o mesmo desliza a bullet e acima vai aparecendo a cor gerada em RGB.</p>
<br/>
<h3>Oque foi usado no desenvolvimento da aplicação:</h3>
<ul>
  <li>Os componentes foram renderizados usando hooks.</li>
  <li>Foi criado 3 estados red, green e blue, para armazenar os valores que forem pegos dos inputs de cada cor.</li>
  <li>Foi criado um estado chamado colorDisplay e foi setado inicialmente em rgb(0, 0, 0), ao usuário deslizar as thumbs(bolinhas do input range) e usando useEffect
os valores dos inputs passados para os estados(red, green e blue) são transferidos para o estado colorDisplay, que por fim é atribuido a um style(estilo) de uma
classe onde dentro desse style se definiu o background-color com o valor do estado colorDisplay. Como o background-color da classe foi definido com o valor do estado colorDisplay
ao usuário deslizar uma ou todas as thumbs, a cor de fundo da classe vai mudando ao receber valores rgb setados com os estados red, green e blue.</li>
  <li>Para melhor compreensão e organização do código foi separado os componentes dos inputs dentro da pasta colors.</li>
  <li>Como os inputs range que representa cada cor foram transformados em componentes e renderizados de forma individual, se usou props para passar os estados e funções para eles
para dessa forma a aplicação funcionar de forma correta.</li>
  <li>A aplicação também utiliza mediaqueries no seu estilo para deixar ela completamente responsiva.</li>
</ul>
<h3>Link do projeto:</h3>
<a href="https://color-picker-sage.vercel.app/">Clique aqui</a>
