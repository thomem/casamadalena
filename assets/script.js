document.querySelectorAll('.reveal').forEach((el)=>{
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },{threshold:.15});
  io.observe(el);
});
const form = document.getElementById('booking-form');
const msg = document.getElementById('form-message');
if(form && msg){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || 'vous').toString().trim();
    msg.textContent = `Merci ${name}. Le site est prêt côté interface. Branche maintenant ce formulaire à Formspree, Netlify Forms ou à ton CRM.`;
    form.reset();
  });
}
