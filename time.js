//翻转beforeTime的上面的盒子
const rotateUp = (e, time, n) => {
  //传入的为一开始翻转的元素，即前面下面的盒子，以及新时间，以及第几个li盒子
  let rotateDeg = 0;
  e.style.zIndex = 50;
  //这个是所有上面的盒子
  const allDownBox = document
    .querySelector(`li:nth-child(${n})`)
    .querySelectorAll(".downBox");
  //所有前面的盒子
  const beforeTime = document
    .querySelector(`li:nth-child(${n})`)
    .querySelectorAll(".beforeTime");
  // 让下面后面的盒子先不可见，然后设置为270°
  allDownBox[1].style.display = "none";
  allDownBox[1].transform = `rotateX(90deg)`;

  const animation = () => {
    rotateDeg -= 3;
    e.style.transform = `perspective(500px) rotateX(${rotateDeg}deg)`;
    if (rotateDeg === -90) {
      //让它更新为最近时间后隐藏
      e.innerHTML = time;
      e.style.zIndex = -1;
      //让刚刚上面隐藏的盒子重新显示出来并且完成90°-180°的旋转
      allDownBox[1].style.display = "block";
      allDownBox[0].style.zIndex = 1;
      rotateDown(allDownBox[1], 90);
      allDownBox[1].style.zIndex = 1;
    }
    if (rotateDeg == -150) {
      beforeTime[1].innerHTML = time;
    }
    if (rotateDeg > -180) {
      requestAnimationFrame(animation);
    }
  };
  animation();
};
//翻转afterTime的下面的盒子
const rotateDown = (e, rotateDeg) => {
  const animation = () => {
    rotateDeg -= 3;
    e.style.transform = `perspective(500px) rotateX(${rotateDeg}deg)`;
    if (rotateDeg > 0) {
      requestAnimationFrame(animation);
    }
  };
  animation();
};
//获取时间
let mujica = +new Date("2025-1-2 10:00");
let now_time = +new Date();
let sum_second = (mujica - now_time)/1000;
let day = sum_second / 86400;
sum_second %= 86400;
let hour = sum_second/3600;
sum_second %= 3600;
let minute = sum_second / 60;
sum_second %= 60;
let second = sum_second;

//分配时间格式
let Ten_of_day = Math.floor(day / 10);
let Units_of_day = Math.floor(day % 10);
let Ten_of_hour = Math.floor(hour / 10);
let Units_of_hour = Math.floor(hour % 10);
let Ten_of_minute = Math.floor(minute / 10);
let Units_of_minuete = Math.floor(minute % 10);
let Ten_of_second = Math.floor(second / 10);
let Units_of_second = Math.floor(second % 10);

let Ten_of_dayLi = document
  .querySelector("li:nth-child(1)")
  .querySelectorAll(".beforeTime")
  .forEach((e) => (e.innerHTML = Ten_of_day));
let Units_of_dayLi = document
  .querySelector("li:nth-child(2)")
  .querySelectorAll(".beforeTime")
  .forEach((e) => (e.innerHTML = Units_of_day));
let Ten_of_hourLi = document
  .querySelector("li:nth-child(4)")
  .querySelectorAll(".beforeTime")
  .forEach((e) => (e.innerHTML = Ten_of_hour));
let Units_of_hourLi = document
  .querySelector("li:nth-child(5)")
  .querySelectorAll(".beforeTime")
  .forEach((e) => (e.innerHTML = Units_of_hour));
let Ten_of_minuteLi = document
  .querySelector("li:nth-child(7)")
  .querySelectorAll(".beforeTime")
  .forEach((e) => (e.innerHTML = Ten_of_minute));
let Units_of_minuteLi = document
  .querySelector("li:nth-child(8)")
  .querySelectorAll(".beforeTime")
  .forEach((e) => (e.innerHTML = Units_of_minuete));
let Ten_of_secondLi = document
  .querySelector("li:nth-child(10)")
  .querySelectorAll(".beforeTime")
  .forEach((e) => (e.innerHTML = Ten_of_second));
let Units_of_secondLi = document
  .querySelector("li:nth-child(11)")
  .querySelectorAll(".beforeTime")
  .forEach((e) => (e.innerHTML = Units_of_second));

let changeTime = () => {
  //获取时间
  let mujica = +new Date("2025-1-2 10:00");
  let now_time = +new Date();
  let sum_second = (mujica - now_time) / 1000;
  let day = sum_second / 86400;
  sum_second %= 86400;
  let hour = sum_second / 3600;
  sum_second %= 3600;
  let minute = sum_second / 60;
  sum_second %= 60;
  let second = sum_second;

  //分配时间格式
  let Ten_of_day = Math.floor(day / 10);
  let Units_of_day = Math.floor(day % 10);
  let Ten_of_hour = Math.floor(hour / 10);
  let Units_of_hour = Math.floor(hour % 10);
  let Ten_of_minute = Math.floor(minute / 10);
  let Units_of_minuete = Math.floor(minute % 10);
  let Ten_of_second = Math.floor(second / 10);
  let Units_of_second = Math.floor(second % 10);

  //天的十位
  let setTen_of_DayBox = document
    .querySelector("li:nth-child(1)")
    .querySelectorAll(".afterTime");
  if (
    !setTen_of_DayBox[0].innerHTML ||
    setTen_of_DayBox[0].innerHTML != Ten_of_day
  ) {
    if (setTen_of_DayBox[0].innerHTML)
      rotateUp(
        document
          .querySelector("li:nth-child(1)")
          .querySelectorAll(".beforeTime")[0],
        Ten_of_day,
        1
      );
    setTen_of_DayBox.forEach((e) => (e.innerHTML = Ten_of_day));
  }
  //天的个位
  let setUnits_of_DayBox = document
    .querySelector("li:nth-child(2)")
    .querySelectorAll(".afterTime");
  if (
    !setUnits_of_DayBox[0].innerHTML ||
    setUnits_of_DayBox[0].innerHTML != Units_of_day
  ) {
    if (setUnits_of_DayBox[0].innerHTML)
      rotateUp(
        document
          .querySelector("li:nth-child(2)")
          .querySelectorAll(".beforeTime")[0],
        Units_of_day,
        2
      );
    setUnits_of_DayBox.forEach((e) => (e.innerHTML = Units_of_day));
  }

  //检测小时的十位是否变化
  let setTen_of_HourBox = document
    .querySelector("li:nth-child(4)")
    .querySelectorAll(".afterTime");
  //第一个也行，第二个也行，因为两个一样，注意是！=因为一个为string，一个为number
  if (
    !setTen_of_HourBox[0].innerHTML ||
    setTen_of_HourBox[0].innerHTML != Ten_of_hour
  ) {
    if (setTen_of_HourBox[0].innerHTML)
      rotateUp(
        document
          .querySelector("li:nth-child(4)")
          .querySelectorAll(".beforeTime")[0],
        Ten_of_hour,
        4
      );
    setTen_of_HourBox.forEach((e) => (e.innerHTML = Ten_of_hour));
  }

  //检测小时的个位是否变化
  let setHourBox = document
    .querySelector("li:nth-child(5)")
    .querySelectorAll(".afterTime");
  //第一个也行，第二个也行，因为两个一样
  if (!setHourBox[0].innerHTML || setHourBox[0].innerHTML != Units_of_hour) {
    if (setHourBox[0].innerHTML)
      rotateUp(
        document
          .querySelector("li:nth-child(5)")
          .querySelectorAll(".beforeTime")[0],
        Units_of_hour,
        5
      );
    setHourBox.forEach((e) => (e.innerHTML = Units_of_hour));
  }

  //分钟的十位
  let setTen_of_MinuteBox = document
    .querySelector("li:nth-child(7)")
    .querySelectorAll(".afterTime");
  if (
    !setTen_of_MinuteBox[0].innerHTML ||
    setTen_of_MinuteBox[0].innerHTML != Ten_of_minute
  ) {
    if (setTen_of_MinuteBox[0].innerHTML)
      rotateUp(
        document
          .querySelector("li:nth-child(7)")
          .querySelectorAll(".beforeTime")[0],
        Ten_of_minute,
        7
      );
    setTen_of_MinuteBox.forEach((e) => (e.innerHTML = Ten_of_minute));
  }

  //分钟的个位
  let setUnits_of_MinuteBox = document
    .querySelector("li:nth-child(8)")
    .querySelectorAll(".afterTime");
  if (
    !setUnits_of_MinuteBox[0].innerHTML ||
    setUnits_of_MinuteBox[0].innerHTML != Units_of_minuete
  ) {
    if (setUnits_of_MinuteBox[0].innerHTML)
      rotateUp(
        document
          .querySelector("li:nth-child(8)")
          .querySelectorAll(".beforeTime")[0],
        Units_of_minuete,
        8
      );
    setUnits_of_MinuteBox.forEach((e) => (e.innerHTML = Units_of_minuete));
  }

  //秒的十位
  let setTen_of_SecondBox = document
    .querySelector("li:nth-child(10)")
    .querySelectorAll(".afterTime");
  if (
    !setTen_of_SecondBox[0].innerHTML ||
    setTen_of_SecondBox[0].innerHTML != Ten_of_second
  ) {
    if (setTen_of_SecondBox[0].innerHTML) {
      rotateUp(
        document
          .querySelector("li:nth-child(10)")
          .querySelectorAll(".beforeTime")[0],
        Ten_of_second,
        10
      );
    }
    setTen_of_SecondBox.forEach((e) => (e.innerHTML = Ten_of_second));
  }

  //秒的个位
  let setUnits_of_SecondBox = document
    .querySelector("li:nth-child(11)")
    .querySelectorAll(".afterTime");
  //获取的是上面的盒子即upBox beforeTime，数字是第几个li，进行翻转
  rotateUp(
    document
      .querySelector("li:nth-child(11)")
      .querySelectorAll(".beforeTime")[0],
    Units_of_second, //时间
    11 //第几个元素
  );
  setUnits_of_SecondBox.forEach((e) => (e.innerHTML = Units_of_second));

  setTimeout(changeTime, 1000);
};
changeTime();
