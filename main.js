$(document).ready(function() {

    $('.rus').on('click', function() {
       var r = $('.localization').each(function() {
          var el = $(this);
          var key = (el.attr('caption'));
          el.text(rus[key]);
       });
    });
 
 
    $('.eng').on('click', function() {
       var r = $('.localization').each(function() {
          var el = $(this);
          var key = (el.attr('caption'));
          el.text(eng[key]);
       });
    });
 
 
 
    var rus = {
       h1: 'Привет! Меня зовут Глеб.',
       p1: 'Я создаю понятные и простые решения в UI- и UX-дизайне,',
       p2: 'чтобы решить сложные проблемы не всегда очевидными путями. Используя опыт в маркетинге, общении с людьми и техникой, я с каждым новым проектом стремлюсь приблизиться к тонкой границе между опытом пользователя и удовольствием от визуального восприятия продукта.',
    };
    var eng = {
       h1: 'Hi! My name is Gleb.',
       p1: 'I create clear and simple solutions in UI and UX design,',
       p2: 'to solve complex problems in non-trivial ways. Using my experience in marketing as well as communication with people and technology, with each new project I strive to reach the thin border between user experience and visual perception of the product.',
    };

    
 
 
 
 
 
 });
 