//~ 1 - Afficher le nombre de villes dans la div "nombreVilles"
$(document).ready(function() { 

	//~ Appel de la fonction quand on clique sur l'élément dont l'id est "nombreVilles"
	$("#nombreVilles").click(function() { 
		//~ On stocke le nombre d'éléments dont la class est 'villes'
		var nombre_elements = $('.villes').length;

		//~ On affiche la valeur de la variable dans l'éléments dont l'id est "affichageNombreVilles"
		$('#affichageNombreVilles').html('Le nombre de villes de la liste est de ' + nombre_elements);
	});

});
	
	//~ 2 - Changer l'apparence des balises <p>
	$(document).ready(function() { 

		//~ Appel de la fonction quand on clique sur l'éléments dont l'id est "apparenceBalisesP"
		$("#apparenceBalisesP").click(function() { 
			//~ Pour toutes les balises p, le texte passe en rouge, en gras et sur fond gris
			$('p').css({
				'color':'red',
				'font-weight':'bold',
				'background-color':'grey'
			});
		});

	});
	
	//~ 3 - Mettre le nom de la dernière ville en gras
	$(document).ready(function() {

		//~ Appel de la fonction quand on clique sur l'éléments dont l'id est "derniereVilleGras"	
		$('#derniereVilleGras').click(function() { 
			//~ Mettre le nom de la dernière ville de la liste en gras
			$('.villes:last').css('font-weight','bold'); 
      	});

	});
	
	//~ 4 - Supprimer la troisième ville de la liste
	$(document).ready(function() {

		//~ Appel de la fonction quand on clique sur l'éléments dont l'id est "derniereVilleGras"	
		$('#supprimerTroisiemeVille').click(function() {
			$('.villes').eq(2).remove();
		});

	});
	
	//~ 5 - Ajouter une ville à la liste
	$(document).ready(function() {

		//~ Appel de la fonction quand on clique sur l'élément dont l'id est "ajouterVille"
		$('#ajouterVille').click(function() { 
			//~ On récupère la valeur rentrée par l'utilisateur dans l'éléments dont l'id est "ajout"
			var ville= $('#ajout').val(); 
			/*
				On pointe sur notre liste de villes pour y insérer 
				la ville saisie par l'utilisateur en la formatant
				correctement dans la liste
			*/
			$('ul#liste').append('<li class="villes">'+ville+'</li>'); 
		});

	});

	//~ 6 - Effets graphiques
	$(document).ready(function() { 

		//~ Appel de la fonction quand on clique sur l'éléments dont l'id est "effetsGraphiques"
		$("#effetsGraphiques").click(function() {
			$('#slidedown').slideDown(function(){
				//~ Quand l'effet slideDown est terminé, on effectue l'effet suivant

				$('#show').show(function(){
					//~ Quand l'effet show est terminé, on effectue l'effet suivant

					$('#slidetoggle').slideToggle("fast", function(){
						/*
							Quand l'effet slideToggle est terminé, on effectue l'effet suivant
							Cumulation d'effet en simultané sur le même élément
							"animate" contient les mêmes propriétés que la methode "css", mais 
							il effectue 'en douceur' la modification CSS, dans un 
							temps imparti transmis en paramètres (ici, de 2000 millisecondes)
						*/
						$('#animate').show().animate({
							'margin-left':'+=70px',
							'margin-top' : '-=100px',
							'width':'-=20px',
							'height':'-=20px'
						},2000);
					});
				}); 
			}); 
		});	
		
	});