console.log('외부 js 파일')
// Step1. moveLeft 함수와, moveRight 함수를 선언 

let move = 0;

const moveLeft = ()=>{
    console.log('left')
    if(move < 1200){
        move += 50
        document.getElementById('horse').style.right = move+'px'
    }
}

const moveRight = ()=>{
    console.log('right')
    if(move > 0){
        move -= 50
        document.getElementById('horse').style.right = move+'px'
    }
}

// Step2. left 버튼을 누르면 moveLeft 함수를 호출 
//         2-1. 말이 왼쪽으로 50px씩 이동 
//         2-2. 단, 말이 판을 벗어나지 않도록 할 것 

document.getElementsByClassName('btn')[0].addEventListener('click',moveLeft)
document.getElementsByClassName('btn')[1].addEventListener('click',moveRight)

// Step3. right 버튼을 누르면 moveRight 함수를 호출 
//         3-1. 말이 오른쪽으로 50px씩 이동 
//         3-2. 단, 말이 판을 벗어나지 않도록 할 것 

// 힌트1) 오른쪽과 왼쪽은 하나의 축으로 이어져있다! 
// 힌트2) js 로 하는게 헷갈리면 css로 가서 값을 한번 줘볼 것 


// 화살표 방향키를 눌렀을 때, 이동하도록 해줄 것 

const jump = ()=>{
    document.getElementById('horse').animate([
        {bottom : '200px'},
        {bottom : '400px'},
        {bottom : '200px'}
    ],{
        duration : 700
    })
}

// body태그 내에서 있는 모든 방향키 이벤트를 잡아줘야함 
document.getElementsByTagName('body')[0].addEventListener('keydown',(e)=>{
    console.log('keydown',e.key)
    if(e.key === 'ArrowLeft'){
        moveLeft()
    }else if(e.key == 'ArrowRight'){
        moveRight()
    } else if (e.key === ' '){
        jump()
    }
})