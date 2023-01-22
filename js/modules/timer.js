function timer(deadline, timerContainerSelector){
    //TIMER 
    function nullFirst(number) {
        if (number < 10 && number >= 0) {
            return `0${number}`;
        } else return number;
    }

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;

        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = hours = minutes = seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((t / (1000 * 60)) % 60);
            seconds = Math.floor((t / (1000)) % 60);
        }

        return {
            'totalTime': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }

    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds");

        updateClock();
        let timerInterval = setInterval(updateClock, 1000);
        

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = nullFirst(t.days);
            hours.innerHTML = nullFirst(t.hours);
            minutes.innerHTML = nullFirst(t.minutes);
            seconds.innerHTML = nullFirst(t.seconds);

            if (t.totalTime <= 0) {
                clearInterval(timerInterval);
            }
        }
    }

    setClock(timerContainerSelector, deadline);
}

export default timer;