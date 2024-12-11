import React, { useEffect, useState } from 'react'

function CardOfferTimmer({msgHour, msgMinuts,}) {

  const calculateTotalSecond = () => {
    let initialHours = msgHour;
    let initialMunutes = msgMinuts;
    let initialSecond = 0;
    return initialHours*3600 + initialMunutes * 60 + initialSecond;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTotalSecond())
  const [isRunning, setIsRunning] = useState(true);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  useEffect(() => {
    let intervalId;
    if(isRunning && timeLeft > 0){
      intervalId = setInterval(()=>{
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }else if (timeLeft === 0){
      setIsRunning(false);
    }
    return ()=> clearInterval(intervalId);
  }, [isRunning, timeLeft])

  const formatTime = (time) => {
    return time.toString().padStart(2,'0');
  }

  return (
    <>
      <button className='bg-[#F35244] rounded-sm px-2 text-white text-lg font-quicksand-w400' disabled>&nbsp;Expires In: &nbsp; {formatTime(hours)} : {formatTime(minutes)} : {formatTime(seconds)} &nbsp;</button>
    </>
  )
}

export default CardOfferTimmer