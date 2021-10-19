 let deadline = new Date('2021-10-20');
  // formatDate 'yyyy-mm-dd' 

  const timerId = setInterval(function timer () {    
            const  timerDays = document.querySelector('.timer__days'),
            timerHours = document.querySelector('.timer__hours'),
            timerMinutes = document.querySelector('.timer__minutes'),
            timerSeconds = document.querySelector('.timer__seconds'),
            labelDays = document.querySelector('.label__days'),
            labelHours = document.querySelector('.label__hours'),
            labelMinutes = document.querySelector('.label__minutes'),
            labelSeconds = document.querySelector('.label__seconds');
     
     const nowDate = new Date().getTime();
     let lastDate  = deadline - nowDate;

     if(lastDate >= 0) {
         let day = Math.floor(lastDate / (1000 * 60 * 60 * 24)),
         hour = Math.floor(lastDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
         minute = Math.floor(lastDate % (1000 * 60 * 60) / (1000 * 60)),
         second = Math.floor(lastDate % (1000 * 60) / 1000);
    
    timerDays.textContent = day < 10 ? '0' + day : day;
    timerHours.textContent = hour < 10 ? '0' + hour : hour;
    timerMinutes.textContent = minute < 10 ? '0' + minute : minute;
    timerSeconds.textContent = second < 10 ? '0' + second : second;
    
    const valid = (item,label,arr) => {
     if(item % 10 >= 5 || item % 10 === 0 || item === 11) {
         label.textContent = arr[0];
     } else if(item === 1 || item % 10 === 1) {
         label.textContent = arr[1];
     } else if(item > 1 && item < 10 || item % 10 < 5 && item > 20) {
         label.textContent = arr[2];
     }
    }
    valid(day,labelDays,['Дней','День','Дня']);
    valid(hour,labelHours,['Часов','Час','Часа']);
    valid(minute,labelMinutes,['Минут','Минута','Минуты']);
    valid(second,labelSeconds,['Секунд','Секунда','Секунды']);
        } else {
                clearInterval(timerId);
                const timerContent = document.querySelector('.timer__items');
                timerContent.innerHTML = '<h2 class="finish">Акция завершена</h2>' 
            }  
},1000);

  
    
 


