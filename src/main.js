!function(){
    var duration = 25
    $('.buttons').on('click', 'button', function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 50
                break
            case 'normal':
                duration = 25
                break
            case 'fast':
                duration = 5
                break
            case 'refresh':
                window.location.reload()
                break
        }
    })
    function writeCode(prefix, code, fn){
        let codeBox = document.querySelector('#code')
        let write = document.querySelector('#write')
        let n = 0
        let id
        id = setTimeout(function run(){
            n+=1
            codeBox.innerHTML = code.substring(0,n)
            write.innerHTML = code.substring(0,n)
            codeBox.scrollTop = codeBox.scrollHeight
            if(n < code.length){
                id = setTimeout(run, duration)
            }else{
                fn && fn.call()
            }
        }, duration)
    }
    let code = `.pikaWrapper{

    display: flex;
    justify-content: center;
    align-items: center;
    background: #FEE433;
}

.pikachu {
    width: 400px;
    height: 400px;
    position: relative;
    overflow: hidden;
    background: #FEE433;
}

.nose {
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -12px;
}

.eyeL{
    width: 49px;
    height: 49px;
    border-radius: 50%;
    background: #2E2E2E;
    position: absolute;
    border: 2px solid black;
    left:70px;
    top: 170px;
}
.eyeR{
    width: 49px;
    height: 49px;
    border-radius: 50%;
    background: #2E2E2E;
    position: absolute;
    border: 2px solid black;
    left:280px;
    top: 170px;
}
.eye ::before{
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid #000;
}

.mouthUp{
    left: 50%;
    top: 200px;
    position: absolute;
}
.lipL{
    height: 25px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top: 30px;
    background: #FDE348;
    right: 0px;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}
.lipR{
    height: 25px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top: 30px;
    background: #FDE348;
    left: 0px;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}
.mouthDown{
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    height: 110px;
    top: 240px;
    width: 300px;
    overflow: hidden;
}
.lipB{
    height: 3500px;
    width: 300px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0px;
    overflow: hidden;
}
.lipB::after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #FC4A62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;
}
.ballL{
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 250px;
    left: 10px;
}
.ballR{
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 250px;
    right: 10px;
}


/*绘制完成！*/
`
    writeCode('',code)

}.call()