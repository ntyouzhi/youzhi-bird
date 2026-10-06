const birds={crane:'丹顶鹤',mallard:'绿头鸭',eagle:'老鹰'};
const requested=new URLSearchParams(location.search).get('bird'),bird=Object.hasOwn(birds,requested)?requested:'crane';
document.body.dataset.bird=bird;document.title='鸟类观察 · '+birds[bird];document.getElementById('view').setAttribute('aria-label',birds[bird]+'三维模型');
document.querySelector(`nav [data-bird="${bird}"]`).setAttribute('aria-current','page');
try{await import('./'+bird+'.js');document.getElementById('speed').disabled=false;}catch(error){document.getElementById('status').textContent='加载失败，请刷新重试';console.error(error);}

if(new URLSearchParams(location.search).get('local')==='1'){document.querySelectorAll('nav a').forEach(a=>{a.href+='&local=1'});const heartbeat=()=>fetch('/__heartbeat',{cache:'no-store'}).catch(()=>{});heartbeat();setInterval(heartbeat,20000);}
