//Variáveis 
const apiKey = "d628542df6f2122040f9bd3851fe1fb5";
const apiCountryURL =`https://flagsapi.com/`;

const DigitarCidade = document.querySelector("#city-input");
const BotaoPesquisa = document.querySelector("#search");

const ElementosCidade = document.querySelector("#city") 
const TemperaturaCidade = document.querySelector("#temperature span")
const DescricaoCidade = document.querySelector("#description")
const IconeCidade = document.querySelector("#weather-icon")
const BandeiraCidade = document.querySelector("#country")
const UmidadeCidade = document.querySelector("#humidity span")
const VentoCidade = document.querySelector("#wind span")
const WeatherContainer = document.querySelector("#weather-data")


//Funções
//Resumindo o comportamento do código: quando o usuário digita o nome de uma cidade em uma caixa de texto e clica no botão de pesquisa, o nome da cidade é capturado, e a função MostrarDadosTempo é chamada para exibir esse nome no console do navegador.

const MostrarDadosTempo = async (Cidade) => {
   const DadosObtidos = await ObterDadosTempo(Cidade);

    ElementosCidade.innerText = DadosObtidos.name;
    TemperaturaCidade.innerText = parseInt(DadosObtidos.main.temp);
    DescricaoCidade.innerText = DadosObtidos.weather[0].description;
    IconeCidade.setAttribute("src",`https://openweathermap.org/img/wn/${DadosObtidos.weather[0].icon}.png`
        );
        const bandeiraURL = `https://flagsapi.com/${DadosObtidos.sys.country.toUpperCase()}/shiny/64.png`;
        BandeiraCidade.setAttribute("src", bandeiraURL);
        UmidadeCidade.innerText = `${DadosObtidos.main.humidity}%`;
        VentoCidade.innerText = `${DadosObtidos.wind.speed}km/h`;
        WeatherContainer.classList.remove("hide");

}

//Essa função consulta os dados da API, uma acessa os dados da API e outra que exibe os dados

//Essa primeira função tem de ser assíncrona, pois a API pode demorar a responder 
const ObterDadosTempo = async (Cidade) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${Cidade}&units=metric&appid=${apiKey}&lang=pt_br`;

    const Resposta = await fetch(apiWeatherURL);
    const DadosObtidos = await Resposta.json();

   return DadosObtidos;
}


//Eventos

//Teste do Botão de Pesquisa
//Pega o valor digitado, e com o botão de pesquisa, joga para a Const
BotaoPesquisa.addEventListener("click", (e) => {
    e.preventDefault()

    const Cidade = DigitarCidade.value;

    MostrarDadosTempo(Cidade);
})

//Ativar o botão de enter para fazer a pesquisa

DigitarCidade.addEventListener("keyup", (e) => {
    if(e.code === "Enter") {
        const Cidade = e.target.value 
        MostrarDadosTempo(Cidade);
    }
});