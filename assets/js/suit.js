alert('Selamat Datang di aplikasi Suit!!');
let response = prompt('apakah anda ingin bermain suit?(ya/tidak) : ');
if (response == 'ya') {

	let name = prompt('masukkan nama anda : ');

	let repeat = 1;
	while(repeat == 1){
		// random computers chooser
		let computers = Math.floor(Math.random() * 3);
		let computer,result,replay;
		if (computers == 0) {
			computer = 'gunting' 
		}else if(computers == 1){
			computer = 'batu'
		}else{
			computer = 'kertas'
		}
		// player chooser
		let suit = prompt('masukkan pilihan anda (gunting,batu,kertas) ')
		switch(suit){
			case 'gunting' :
				switch(computer){
					case 'gunting' :
						result = 'seimbang'
						break;
					case 'batu' :
						result = 'kalah'
						break;
					default:
						result = 'menang'
						break;
				}
				break;
			case 'batu' :
				switch(computer){
					case 'gunting' :
						result = 'menang'
						break;
					case 'batu' :
						result = 'seimbang'
						break;
					default:
						result = 'kalah'
						break;
				}
				break;
			case 'kertas' :
				switch(computer){
					case 'gunting' :
						result = 'kalah'
						break;
					case 'batu' :
						result = 'menang'
						break;
					default:
						result = 'seimbang'
						break;
				}
				break;
			default:
			result = 'pilihan anda tidak ada di daftar,pilih salah satu dari (gunting,batu,kertas)';
			break;
		}
		// result
		alert('Komputer : ' + computer + ' | '+name+' : ' + suit + ' | Hasil : ' + result);

		// replay
		let res = true;
		while(res){
			res = false;
			replay = prompt('ingin bermain lagi? (ya/tidak)');
			if (replay == 'ya') {
				repeat = 1;
			}else if (replay == 'tidak') {
				repeat = 0;
			}else{
				res = true;
			}
		}
	}

}