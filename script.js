let player1 = [];
let player2 = [];
let turn = 0;
let moves = 0
const array = ["1","2","3","4","5","6","7","8","9"]
const answer =[
    ['1','2','3'],
    ['1','4','7'],
    ['1','5','9'],
    ['2','5','8'],
    ['3','6','9'],
    ['3','5','7'],
    ['4','5','6'],
    ['7','8','9'],

] 


document.addEventListener('click',(event)=>{

    const clicked_Id = event.target.id

    if (clicked_Id){
        make_move(clicked_Id);
        
    }

})


// function arrayContainsArray(outerArray, innerArray) {
//     return outerArray.some(outerSubArray => outerSubArray.every((element, index) => element === innerArray[index]));
//   }

function check_win(player){


    
    for(let i = 0;i<answer.length;i++){
        let count = 0

        for(let j = 0;j<answer[i].length;j++){

            if (!player.includes(answer[i][j])){
                count+=1
                break
            }
        }

        // console.log('here we go')

        if (count===0){
            return true
        }

    }
}

function make_move (id){


    if (!document.getElementById(id).innerHTML){

        if (turn%2===0 && !check_win(player1) && !check_win(player2)){
            player1.push(id)
            document.getElementById(id).innerHTML = "X"
            document.getElementById("span2").innerHTML = "2";
            turn+=1
            moves+=1 
            // console.log(player1,'player1')
            if (player1.length>=3 && check_win(player1)){

                document.getElementById('span2').innerHTML = '1';
                document.getElementById('span3').innerHTML = 'wins !';

                const win =  document.getElementById('player1-win').innerHTML
                const win_mini =  document.getElementById('player1-win-mini').innerHTML
                document.getElementById('player1-win').innerHTML = parseInt(win,10) + 1 
                document.getElementById('player1-win-mini').innerHTML = parseInt(win_mini,10) + 1 
                moves = 0
                
                // console.log(check_win(player1))
                return
                
            }

            
        }
    
        else if (turn%2===1 && !check_win(player1) && !check_win(player2)){
            player2.push(id)
            document.getElementById(id).innerHTML = "O"
            document.getElementById("span2").innerHTML = "1"
            turn+=1
            moves+=1 
            // console.log(player2,'player2')
            
            if (player2.length>=3 && check_win(player2)){

                document.getElementById('span2').innerHTML = '2';
                document.getElementById('span3').innerHTML = 'wins';
                const win =  document.getElementById('player2-win').innerHTML
                document.getElementById('player2-win').innerHTML = parseInt(win,10)+1
                const win_mini =  document.getElementById('player2-win-mini').innerHTML
                document.getElementById('player2-win-mini').innerHTML = parseInt(win_mini,10)+1
                moves = 0;
                return
                
            }
            

            
        }



        if (moves===9){
            document.getElementById('span1').innerHTML = 'Opps';
            document.getElementById('span2').innerHTML = 'its';
            document.getElementById('span3').innerHTML = 'a draw !';
            
            return
        }
    }
}



function play_again(){
    for(let i = 0;i<array.length;i++){
        document.getElementById(array[i]).innerHTML = "";
    }

    player1 = []
    player2 = []
    turn = 0
    moves = 0

    document.getElementById('span1').innerHTML = 'player';
    document.getElementById('span2').innerHTML = '1';
    document.getElementById('span3').innerHTML = 'to move !';

    

}
