const Nyclock = document.querySelector(".clock-NY-est");
const Euclock = document.querySelector(".clock-EU-est");
const clock = document.querySelector(".clock-korea");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const KrDate = new Date().toLocaleString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit', weekday: "long", hour: '2-digit', hour12: false, minute: '2-digit' });
    const NyDate_summer = new Date(date.getTime() - date.getTimezoneOffset() * -26667).toISOString().split("T")[0];
    const NyTime1_summer = new Date(date.getTime() - date.getTimezoneOffset() * -26667).toISOString().split("T")[1].slice(0,8);
    const NyDate_winter = new Date(date.getTime() - date.getTimezoneOffset() * -33334).toISOString().split("T")[0];
    const NyTime1_winter = new Date(date.getTime() - date.getTimezoneOffset() * -33334).toISOString().split("T")[1].slice(0,8);
    const EUTime1_summer = new Date(date.getTime() - date.getTimezoneOffset() * 13333).toISOString().split("T")[1].slice(0,8);
    const EUTime1_winter = new Date(date.getTime() - date.getTimezoneOffset() * 6666).toISOString().split("T")[1].slice(0,8);
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    // Nyclock.innerText =  `NewYork🇺🇸(EST) \n${NyDate_winter} ⏰ ${NyTime1_winter}`;
    // Euclock.innerText =  `Germany🇩🇪(EU) \n⏰ ${EUTime1_winter}`;
    Nyclock.innerText =  `NewYork🇺🇸(EST) \n${NyDate_summer} ⏰ ${NyTime1_summer}`;
    Euclock.innerText =  `Germany🇩🇪(EU) \n⏰ ${EUTime1_summer}`;
    clock.innerText = `한국Korea🇰🇷 \n${KrDate}`;
}

getClock();
setInterval(getClock, 1000);
