 window.onload = CapturaParametrosUrl();
    
/* 
	Captura parâmetros de URL com JS 
	Créditos: https://www.blogson.com.br/
*/

function CapturaParametrosUrl() {

    //captura a url da página
    var url = window.location.href; 
    <!-- alert("URL CAPTURADA: \n\n" + url);-->
	
	//tenta localizar o ?
    var res = url.split('?'); 
    	
	if (res[1] === undefined) {
        <!-- alert('página sem parâmetros.'); -->
    }
	
    if (res[1] !== undefined) {
		//tenta localizar os & (pode haver mais de 1)
        var parametros = eval(res[1])
        <!--alert('Parametros encontrados:\n' + parametros);-->
            alert(parametros);
            
            
		
		//qtd. de parâmetros que serão tratados pelo laço.
		var qtdParametrosParaLer = 5; 
		
		//guarda o nome dos parâmetros e os valores e, vetores.
		var parametroEncontrado = new Array(); 
		var valorParametro = new Array();
		
		for (var cont = 0; cont<=qtdParametrosParaLer; cont++)
		{
			if (parametros[cont] !== undefined) 
			{
				captura = parametros[cont].split('=');				
				
				parametroEncontrado[cont] = captura[0];
				valorParametro[cont] = captura[1];
				
				document.getElementById('resultado').innerHTML += parametroEncontrado[cont] + '=' + valorParametro[cont] + '<br/>';
			}
		}
    }
}
