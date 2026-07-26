  /* ================= SUPABASE AYARLARI ================= */
  var SUPABASE_URL = "https://uyjbeehtxryokwvgctuk.supabase.co";
  var SUPABASE_ANON_KEY = "sb_publishable_9xesHzzQ5w8__dkaWI1uqw_05ZH0ogL"; /* Supabase publishable key — tarayicida guvenli */
  var SB = (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
  /* ===================================================== */

  (function(){
    var tpl = document.getElementById('logoTpl');
    document.querySelectorAll('.logo-slot').forEach(function(s){
      var svg = tpl.content.firstElementChild.cloneNode(true);
      var w = s.getAttribute('data-w') || 40;
      svg.setAttribute('width', w); svg.setAttribute('height', w);
      s.appendChild(svg);
    });
  })();

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var header = document.getElementById('header');
  window.addEventListener('scroll', function(){ header.classList.toggle('scrolled', window.scrollY>8); }, {passive:true});

  var burger = document.getElementById('burger'), navlinks = document.getElementById('navlinks');
  burger.addEventListener('click', function(){
    var o = navlinks.classList.toggle('show'); burger.classList.toggle('open', o); burger.setAttribute('aria-expanded', o);
  });
  navlinks.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){
    navlinks.classList.remove('show'); burger.classList.remove('open'); burger.setAttribute('aria-expanded', false);
    document.querySelectorAll('.nli.open').forEach(function(x){x.classList.remove('open')});
  });});
  // dropdowns: tap-to-expand on mobile, hover handles desktop
  document.querySelectorAll('.nli.has-sub > .nlink').forEach(function(btn){
    btn.addEventListener('click', function(e){
      if (window.matchMedia('(max-width:820px)').matches){
        e.preventDefault();
        var li = btn.parentElement;
        var willOpen = !li.classList.contains('open');
        document.querySelectorAll('.nli.open').forEach(function(x){ if(x!==li) x.classList.remove('open'); });
        li.classList.toggle('open', willOpen);
        btn.setAttribute('aria-expanded', willOpen);
      }
    });
  });

  document.querySelectorAll('.tab').forEach(function(t){
    t.addEventListener('click', function(){
      document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active')});
      document.querySelectorAll('.tabpanel').forEach(function(x){x.classList.remove('show')});
      t.classList.add('active');
      document.getElementById(t.getAttribute('data-tab')).classList.add('show');
    });
  });

  // hero chevron flow
  if (!reduce) {
    var flow = document.getElementById('flow');
    var chev = '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--red)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';
    for (var i=0;i<7;i++){
      var el = document.createElement('i'); el.innerHTML = chev;
      el.style.top = (6 + i*13) + '%'; el.style.animationDelay = (i*0.42)+'s'; el.style.animationDuration = (3+(i%3)*0.5)+'s';
      flow.appendChild(el);
    }
  }

  var iller = [
    {il:"İstanbul", b:"Marmara", m:"Sanayi, finans, ticaret ve lojistiğin merkezi."},
    {il:"Bursa", b:"Marmara", m:"Otomotiv ve tekstil sanayii güçlü."},
    {il:"Kocaeli", b:"Marmara", m:"Ağır sanayi ve petrokimya merkezi."},
    {il:"Balıkesir", b:"Marmara", m:"Tarım, hayvancılık ve gıda."},
    {il:"Tekirdağ", b:"Marmara", m:"Sanayi ve tarımın bir arada olduğu üretken taban."},
    {il:"Sakarya", b:"Marmara", m:"Otomotiv yan sanayi ve tarım."},
    {il:"Çanakkale", b:"Marmara", m:"Tarım, gıda ve turizm."},
    {il:"Edirne", b:"Marmara", m:"Tarım ve sınır ticareti."},
    {il:"Kırklareli", b:"Marmara", m:"Tarım ve sanayi."},
    {il:"Yalova", b:"Marmara", m:"Süs bitkiciliği ve turizm."},
    {il:"Bilecik", b:"Marmara", m:"Seramik ve mermer."},
    {il:"İzmir", b:"Ege", m:"Liman, sanayi, tarım ve ticaret merkezi."},
    {il:"Manisa", b:"Ege", m:"Elektronik, tarım ve gıda."},
    {il:"Aydın", b:"Ege", m:"Tarım (incir, zeytin) ve jeotermal."},
    {il:"Denizli", b:"Ege", m:"Tekstil ve ev tekstili."},
    {il:"Muğla", b:"Ege", m:"Turizm ve tarım."},
    {il:"Afyonkarahisar", b:"Ege", m:"Mermer, gıda ve termal turizm."},
    {il:"Kütahya", b:"Ege", m:"Seramik ve madencilik."},
    {il:"Uşak", b:"Ege", m:"Tekstil ve deri."},
    {il:"Antalya", b:"Akdeniz", m:"Turizm ve seracılık."},
    {il:"Adana", b:"Akdeniz", m:"Tarım ve sanayi."},
    {il:"Mersin", b:"Akdeniz", m:"Liman, lojistik ve tarım."},
    {il:"Hatay", b:"Akdeniz", m:"Gıda, sanayi ve sınır ticareti."},
    {il:"Kahramanmaraş", b:"Akdeniz", m:"Tekstil ve gıda."},
    {il:"Isparta", b:"Akdeniz", m:"Gül, kozmetik ve tarım."},
    {il:"Burdur", b:"Akdeniz", m:"Tarım, hayvancılık ve mermer."},
    {il:"Osmaniye", b:"Akdeniz", m:"Tarım ve sanayi."},
    {il:"Ankara", b:"İç Anadolu", m:"Başkent; savunma, teknoloji ve sanayi."},
    {il:"Konya", b:"İç Anadolu", m:"Tarım, gıda ve makine sanayii."},
    {il:"Kayseri", b:"İç Anadolu", m:"Mobilya ve sanayi."},
    {il:"Eskişehir", b:"İç Anadolu", m:"Sanayi, ulaşım araçları ve üniversite."},
    {il:"Sivas", b:"İç Anadolu", m:"Sanayi, madencilik ve tarım."},
    {il:"Yozgat", b:"İç Anadolu", m:"Tarım ve hayvancılık."},
    {il:"Aksaray", b:"İç Anadolu", m:"Otomotiv yan sanayi ve tarım."},
    {il:"Karaman", b:"İç Anadolu", m:"Gıda ve tarım."},
    {il:"Kırıkkale", b:"İç Anadolu", m:"Savunma ve makine sanayii."},
    {il:"Kırşehir", b:"İç Anadolu", m:"Tarım ve madencilik."},
    {il:"Nevşehir", b:"İç Anadolu", m:"Turizm ve tarım."},
    {il:"Niğde", b:"İç Anadolu", m:"Tarım ve madencilik."},
    {il:"Çankırı", b:"İç Anadolu", m:"Tarım ve madencilik (tuz)."},
    {il:"Samsun", b:"Karadeniz", m:"Liman, tarım ve sanayi."},
    {il:"Trabzon", b:"Karadeniz", m:"Liman, fındık ve turizm."},
    {il:"Ordu", b:"Karadeniz", m:"Fındık ve tarım."},
    {il:"Rize", b:"Karadeniz", m:"Çay ve tarım."},
    {il:"Giresun", b:"Karadeniz", m:"Fındık ve tarım."},
    {il:"Tokat", b:"Karadeniz", m:"Tarım ve gıda."},
    {il:"Amasya", b:"Karadeniz", m:"Tarım (elma) ve gıda."},
    {il:"Çorum", b:"Karadeniz", m:"Gıda (leblebi) ve makine sanayii."},
    {il:"Kastamonu", b:"Karadeniz", m:"Orman ürünleri ve tarım."},
    {il:"Sinop", b:"Karadeniz", m:"Balıkçılık, orman ve turizm."},
    {il:"Zonguldak", b:"Karadeniz", m:"Madencilik (kömür) ve sanayi."},
    {il:"Karabük", b:"Karadeniz", m:"Demir-çelik sanayii."},
    {il:"Bartın", b:"Karadeniz", m:"Tarım, orman ve liman."},
    {il:"Düzce", b:"Karadeniz", m:"Tarım ve sanayi."},
    {il:"Bolu", b:"Karadeniz", m:"Turizm, tarım ve orman."},
    {il:"Gümüşhane", b:"Karadeniz", m:"Madencilik ve tarım."},
    {il:"Bayburt", b:"Karadeniz", m:"Tarım ve hayvancılık."},
    {il:"Artvin", b:"Karadeniz", m:"Orman, madencilik ve turizm."},
    {il:"Erzurum", b:"Doğu Anadolu", m:"Hayvancılık, tarım ve kış turizmi."},
    {il:"Malatya", b:"Doğu Anadolu", m:"Kayısı ve tarım."},
    {il:"Elazığ", b:"Doğu Anadolu", m:"Tarım, madencilik ve enerji."},
    {il:"Van", b:"Doğu Anadolu", m:"Hayvancılık, tarım ve sınır ticareti."},
    {il:"Ağrı", b:"Doğu Anadolu", m:"Hayvancılık ve sınır ticareti."},
    {il:"Kars", b:"Doğu Anadolu", m:"Hayvancılık ve süt ürünleri (kaşar)."},
    {il:"Erzincan", b:"Doğu Anadolu", m:"Tarım, madencilik ve hayvancılık."},
    {il:"Muş", b:"Doğu Anadolu", m:"Tarım ve hayvancılık."},
    {il:"Bitlis", b:"Doğu Anadolu", m:"Tarım ve hayvancılık."},
    {il:"Bingöl", b:"Doğu Anadolu", m:"Tarım, hayvancılık ve arıcılık."},
    {il:"Tunceli", b:"Doğu Anadolu", m:"Tarım, hayvancılık ve arıcılık."},
    {il:"Hakkari", b:"Doğu Anadolu", m:"Hayvancılık ve sınır ticareti."},
    {il:"Iğdır", b:"Doğu Anadolu", m:"Tarım (kayısı) ve sınır ticareti."},
    {il:"Ardahan", b:"Doğu Anadolu", m:"Hayvancılık ve süt ürünleri."},
    {il:"Gaziantep", b:"Güneydoğu Anadolu", m:"Gıda, tekstil ve sanayi merkezi."},
    {il:"Şanlıurfa", b:"Güneydoğu Anadolu", m:"Tarım (GAP) ve gıda."},
    {il:"Diyarbakır", b:"Güneydoğu Anadolu", m:"Tarım, ticaret ve gıda."},
    {il:"Mardin", b:"Güneydoğu Anadolu", m:"Tarım, turizm ve sınır ticareti."},
    {il:"Batman", b:"Güneydoğu Anadolu", m:"Petrol ve tarım."},
    {il:"Adıyaman", b:"Güneydoğu Anadolu", m:"Tarım ve tekstil."},
    {il:"Siirt", b:"Güneydoğu Anadolu", m:"Tarım (fıstık) ve hayvancılık."},
    {il:"Şırnak", b:"Güneydoğu Anadolu", m:"Sınır ticareti ve madencilik."},
    {il:"Kilis", b:"Güneydoğu Anadolu", m:"Tarım (zeytin) ve sınır ticareti."}
  ];
  var ilgrid = document.getElementById('ilgrid'), rpanel = document.getElementById('rpanel');
  var ilfilter = document.getElementById('ilfilter'), ilsearch = document.getElementById('ilsearch');
  var bolgeler = ["Tümü","Marmara","Ege","Akdeniz","İç Anadolu","Karadeniz","Doğu Anadolu","Güneydoğu Anadolu"];
  var activeBolge = "Tümü", selectedIl = null;
  function trLower(s){ return (s||'').toLocaleLowerCase('tr'); }
  function drawIl(x){
    selectedIl = x.il;
    rpanel.innerHTML =
      '<h3>'+x.il+'</h3><span class="badge">'+x.b+' · taslak</span>'+
      '<div class="rrow"><span class="l">Öne çıkan</span><span class="v">'+x.m+'</span></div>'+
      '<div class="rrow"><span class="l">İhtisas ürünü</span><span class="v" style="color:var(--ink-3)">Birlikte belirlenecek — bu il için ihtisas ürününü öner.</span></div>'+
      '<div class="rrow"><span class="l">Öneri</span><span class="v" style="color:var(--ink-3)">Birlikte belirlenecek.</span></div>'+
      '<div class="rnote"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none;margin-top:2px"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg><span>'+x.il+' için ihtisas dosyasını hemşehri dernekleri, ticaret odaları ve akademiyle birlikte açıyoruz. Öneri eklemek için partiye katılın.</span></div>';
    ilgrid.querySelectorAll('.ilbtn').forEach(function(el){ el.classList.toggle('active', el.getAttribute('data-il')===x.il); });
  }
  function renderIller(){
    var q = trLower(ilsearch ? ilsearch.value : '');
    var list = iller.filter(function(x){ return (activeBolge==="Tümü" || x.b===activeBolge) && trLower(x.il).indexOf(q)>-1; });
    if(!list.length){ ilgrid.innerHTML = '<div class="ilempty">Eşleşen il yok.</div>'; return; }
    ilgrid.innerHTML = list.map(function(x){ return '<button class="ilbtn'+(x.il===selectedIl?' active':'')+'" data-il="'+x.il+'">'+x.il+'</button>'; }).join('');
    ilgrid.querySelectorAll('.ilbtn').forEach(function(btn){
      btn.addEventListener('click', function(){ var f = iller.filter(function(y){ return y.il===btn.getAttribute('data-il'); })[0]; drawIl(f); });
    });
  }
  if (ilgrid && ilfilter){
    bolgeler.forEach(function(bn){
      var c = document.createElement('button'); c.className = 'fchip'+(bn==="Tümü"?' active':''); c.textContent = bn;
      c.addEventListener('click', function(){
        activeBolge = bn;
        ilfilter.querySelectorAll('.fchip').forEach(function(z){ z.classList.remove('active'); });
        c.classList.add('active'); renderIller();
      });
      ilfilter.appendChild(c);
    });
    if (ilsearch) ilsearch.addEventListener('input', renderIller);
    renderIller();
    drawIl(iller[0]);
  }

  var webinars = [
    ["İleri Demokrasi Nedir? Katılımcı Yönetimden Üretken Topluma","Demokrasi yalnızca oy vermek midir, yoksa birlikte üretmek mi?"],
    ["Yerel Kalkınmanın Anahtarı: Kooperatifler, Bayilikler ve Girişimcilik","Küçük şehirlerden büyük ekonomik ağlar nasıl kurulur?"],
    ["Yerelden Küresele: Şehirlerin Ekonomik Gücü Nasıl Artırılır?","Belediyeler, STK'lar ve özel sektör birlikte nasıl çalışabilir?"],
    ["Bayilik Sistemleri: Girişimciler İçin Fırsatlar ve Riskler","Bayi olmak isteyenler nelere dikkat etmeli, hangi modeller sürdürülebilir?"],
    ["Adil Ekonomi Mümkün mü? Gelir Dağılımı, Üretim ve Sosyal Refah","Piyasa ile sosyal adalet arasındaki denge nasıl kurulur?"],
    ["Dijital Demokrasi ve E-Katılım Modelleri","Teknoloji, yurttaşı karar süreçlerine nasıl dahil eder?"],
    ["Yeşil Kalkınma: Sürdürülebilir Ekonomi Yerelden Nasıl Başlar?","Çevreyi koruyarak büyümek mümkün mü?"],
    ["Gençler ve Kadınlar İçin Ekonomik Katılım Modelleri","İstihdam, girişimcilik ve temsilde yeni yollar."],
    ["Türkiye ve Dünya Örnekleriyle Başarılı Yerel Kalkınma Hikâyeleri","Hangi şehirler başardı, neden başardı?"],
    ["Sivil Toplumun Ekonomideki Rolü: STK'lar Ne Üretebilir?","Sivil toplum yalnızca eleştirir mi, çözüm de üretir mi?"]
  ];
  var accord = document.getElementById('accord');
  webinars.forEach(function(w,i){
    var n = (i+1<10?'0':'')+(i+1);
    var el = document.createElement('div'); el.className='ac';
    el.innerHTML = '<button class="q"><span class="n">'+n+'</span><span>'+w[0]+'</span><svg class="pl" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="a"><p>'+w[1]+'</p></div>';
    var q = el.querySelector('.q'), a = el.querySelector('.a');
    q.addEventListener('click', function(){ var open = el.classList.toggle('open'); a.style.maxHeight = open ? (a.scrollHeight+'px') : '0'; });
    accord.appendChild(el);
  });

  var sss = [
    ["Teşkilatlanma çalışmaları","İleri Parti kuruluş aşamasındadır. İl ve ilçe teşkilatlanması ile kurucu kadro çalışmaları sürmektedir; katılmak isteyenler Bize Katılın bölümünden ulaşabilir."],
    ["Üyelik ve bağışlar","Üyelik ve gönüllülük herkese açıktır. Üye ol ve Gönüllü ol adımları çevrimiçi başvuruyla ilerleyecek; bağış ve mali şeffaflık süreçleri kuruluşla birlikte duyurulacaktır."],
    ["İhtisas şehirciliği nedir?","Her şehrin tek bir üründe uzmanlaşıp o üründe dünya markası olmasını hedefleyen kalkınma modelimizdir. Ayrıntı için İhtisas Şehirciliği bölümüne bakabilirsiniz."],
    ["Yerinde yerel kalkınma ne demek?","Kalkınmayı merkezden değil, her şehrin kendi kaynak ve yetenekleriyle yerinde büyütmektir. Her il, kendine yeten ve dünyaya satan bir üretim merkezine dönüşür."],
    ["Siyasi yelpazede neredesiniz?","İleri Parti kendini kalıplaşmış sağ-sol ekseninden çok; üretim, adalet, liyakat ve doğrudan demokrasi ilkeleri üzerinden tanımlar. Amacımız toplumun her kesimini üretimde ve karar süreçlerinde buluşturmaktır."],
    ["Neyi farklı yapıyorsunuz?","Siyaseti araç, üretim ve paylaşımı amaç görüyoruz. Vatandaşı yalnızca seçmen değil; aktif bir karar alıcı ve girişimci olarak konumluyoruz."],
    ["Ekonomiye temel yaklaşımınız nedir?","Rant ve dışa bağımlılık yerine üretim. İhtisas şehirciliği, adil ticaret ve kendine yeten bölgelerle borçlanmadan büyüyen bir ekonomi."],
    ["Büyüme stratejiniz nedir?","Basit üründen yan teknolojilere, oradan yüksek katma değere uzanan bir üretim silsilesi; kendi kaynağıyla ve borçlanmadan büyüme."],
    ["Genç işsizliğine çözümünüz nedir?","Gencin kendi şehrinde üretmesini sağlayan ihtisas üretim tesisleri, başlangıç sermayesi fonu, mentorluk ve belgeli mesleki kariyer yolları."],
    ["Girişimciliğe nasıl yaklaşıyorsunuz?","Her vatandaşı potansiyel bir girişimci görürüz; erişilebilir finansman, mentorluk ve pazar açan bir ekosistem kurarız."],
    ["Dijital dönüşüme bakışınız nedir?","e-Devlet, e-katılım ve açık veri; yerli yazılım, yapay zeka ve siber güvenlik; herkes için erişilebilir ve uygun maliyetli teknoloji."],
    ["Kadınların siyasete ve ekonomiye katılımı?","Temsili artıran mekanizmalar (kota dahil), eşit işe eşit ücret, şiddetle etkin mücadele ve bakım yükünü paylaşan politikalar."],
    ["İnsan haklarına yaklaşımınız nedir?","\u201cTek ırk tek insan\u201d: köken, inanç, dil veya cinsiyet ayrımı olmadan tam eşitlik; ifade, basın ve örgütlenme özgürlüğü; azınlık haklarının korunması."],
    ["Hukukun üstünlüğü konusunda ne diyorsunuz?","Bağımsız ve tarafsız yargı, yürütmenin denetlenmesi, adil ve hızlı yargılama, tutukluluğun istisna olması."],
    ["İfade ve basın özgürlüğü?","Özgür medya ve çoğulculuk demokrasinin temelidir; ifade özgürlüğünü ve çoğulcu bir kamusal alanı güvence altına alırız."],
    ["Sosyal devlet anlayışınız nedir?","Kimseyi geride bırakmayan, şeffaf ve adil bir sosyal güvenlik; engelli erişilebilirliği; insana yakışır iş ve gelir güvencesi."],
    ["Çevre ve iklim politikanız?","Yenilenebilir enerji, döngüsel ekonomi, doğa ve su kaynaklarının korunması, iklime uyum; yeşil üretim ve yeşil istihdam."],
    ["Eğitim vizyonunuz nedir?","Üretimle bağlantılı uygulamalı eğitim (yaşayan okullar), fırsat eşitliği, öğretmenin niteliği ve akademik özgürlük."],
    ["Sağlık politikanız nedir?","Herkes için erişilebilir, koruyucu ve nitelikli sağlık; bölgesel eşitsizliğin giderilmesi; yerli ilaç ve tıbbi üretim kapasitesi."],
    ["Tarım ve gıda güvenliği?","Üreticiyi koruyan sürdürülebilir tarım, kooperatifleşme, gıda ve arz güvenliği, su ve toprak kaynaklarının korunması."],
    ["Dış politikanız nasıl?","Sınır komşularıyla 20 yıllık saldırmazlık anlaşmaları, dezavantajlı ülkelere ciro primi, kültürlerin yerinde güçlenmesi ve ufukta küresel serbest dolaşım."],
    ["Yolsuzlukla mücadele?","Açık veri, bağımsız denetim, liyakat ve şeffaf kamu ihalesi; kamu kaynağının izlenebilir olması."],
    ["İttifaklara bakışınız?","İlkelerimizle (üretim, demokrasi, adalet) uyumlu ve halkın yararını gözeten iş birliklerine açığız; kadro ve program bütünlüğümüzü koruruz."],
    ["İletişim","İletişim ve teşkilat bilgileri kuruluşla birlikte yayımlanacaktır. E-posta: iletisim@ileriparti.org"]
  ];
  var sboard = document.getElementById('sss-accord');
  if (sboard){ sss.forEach(function(w,i){
    var n = (i+1<10?'0':'')+(i+1);
    var el = document.createElement('div'); el.className='ac';
    el.innerHTML = '<button class="q"><span class="n">'+n+'</span><span>'+w[0]+'</span><svg class="pl" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="a"><p>'+w[1]+'</p></div>';
    var q = el.querySelector('.q'), a = el.querySelector('.a');
    q.addEventListener('click', function(){ var open = el.classList.toggle('open'); a.style.maxHeight = open ? (a.scrollHeight+'px') : '0'; });
    sboard.appendChild(el);
  }); }

  var eylem = [
    ["Ekonomi & Üretim", ["İhtisas şehirciliğiyle her ilde üretim odaklı bir uzmanlık alanı geliştirmek.","Rant yerine üretimi teşvik eden vergi ve kredi politikaları.","Kooperatif ve yerel marka üretimini desteklemek.","KOBİ ve girişimciye erişilebilir finansman ve pazar açmak.","Katma değeri artıran teknoloji ve tasarım yatırımı."]],
    ["Adalet & Hukukun Üstünlüğü", ["Yargı bağımsızlığını ve tarafsızlığını güvence altına almak.","Liyakate dayalı, şeffaf atama ve terfi.","Adil ve hızlı yargılama; tutukluluğun istisna olması.","Hukuk önünde eşitlik ve etkin hak arama.","Yolsuzlukla mücadelede bağımsız denetim."]],
    ["İnsan Hakları & Özgürlükler", ["\u201cTek ırk tek insan\u201d: her türlü ayrımcılığa karşı tam eşitlik.","İfade, basın, inanç ve örgütlenme özgürlüğünün güvencesi.","Azınlık ve dezavantajlı grupların haklarının korunması.","Uluslararası insan hakları standartlarına uyum.","Kişisel veri ve mahremiyetin korunması."]],
    ["Eğitim", ["Üretimle bağlantılı, uygulamalı ve mesleki eğitim (yaşayan okullar).","Her bölgede nitelikli eğitime erişimde fırsat eşitliği.","Öğretmenin statüsünü ve niteliğini güçlendirmek.","Dijital okuryazarlık ve yaşam boyu öğrenme.","Bilimsel düşünce ve akademik özgürlük."]],
    ["Sağlık", ["Herkes için erişilebilir, koruyucu ve nitelikli sağlık.","Bölgeler arası sağlık eşitsizliğini gidermek.","Sağlık çalışanının hakları ve güvenliği.","Ruh sağlığı ve önleyici hizmetlerin güçlendirilmesi.","Yerli ilaç ve tıbbi üretim kapasitesi."]],
    ["Tarım & Gıda Güvenliği", ["Üreticiyi koruyan, sürdürülebilir tarım politikaları.","Kooperatifleşme ve yerel gıda ağları.","Gıda ve arz güvenliğinin sağlanması.","Su ve toprak kaynaklarının korunması.","Tarımda teknoloji ve katma değer."]],
    ["Çevre & İklim", ["Yenilenebilir enerjiye geçiş ve enerji verimliliği.","Döngüsel ekonomi ve atık yönetimi.","Doğa, su ve biyoçeşitliliğin korunması.","İklim krizine uyum ve azaltım planları.","Yeşil üretim ve yeşil istihdam."]],
    ["Gençlik", ["Kendi şehrinde üretim ve istihdamla göçü tersine çevirmek.","Girişimciye başlangıç sermayesi ve mentorluk.","Karar süreçlerinde güçlü genç temsili.","Belgeli, nitelikli mesleki kariyer yolları.","Kültür, spor ve sosyal alanlara erişim."]],
    ["Kadın Hakları & Eşitlik", ["Siyasette ve ekonomide kadın temsilini artırmak (kota dahil).","Eşit işe eşit ücret ve fırsat eşitliği.","Kadına yönelik şiddetle etkin mücadele ve koruma.","Bakım yükünü paylaşan politikalar (kreş, izin).","Kadın girişimciliğine özel destek."]],
    ["Çocuk & Aile", ["Çocuk işçiliğine son; eğitime tam erişim.","Çocuk hakları ve çevrimiçi güvenlik.","Erken çocukluk eğitimi ve sağlıklı beslenme.","Aileyi destekleyen sosyal hizmetler.","İstismara karşı güçlü koruma mekanizmaları."]],
    ["Sosyal Devlet & Refah", ["Kimseyi geride bırakmayan sosyal güvenlik.","Şeffaf ve adil sosyal yardım.","Engelli bireyler için fiziksel ve dijital erişilebilirlik.","İnsana yakışır iş ve gelir güvencesi.","Bölgesel kalkınma farkını kapatmak."]],
    ["Dijital Dönüşüm & Teknoloji", ["e-Devlet ve e-katılımın yaygınlaşması.","Açık veri ve şeffaf yönetim.","Erişilebilir ve uygun maliyetli internet ile teknoloji.","Yerli yazılım, yapay zeka ve siber güvenlik.","Dijital haklar ve veri mahremiyeti."]],
    ["Dış Politika & Küresel Barış", ["Sınır komşularıyla 20 yıllık saldırmazlık anlaşmalarını teşvik.","Dezavantajlı ülkelere ciro primiyle adil ticaret.","Kültürlerin yerinde güçlenmesi ve demokrasiyle buluşması.","Ufuk ideali olarak küresel serbest dolaşımı savunmak.","İnsan hakları ve barış temelli onurlu diplomasi."]]
  ];
  var eboard = document.getElementById('eylem-accord');
  if (eboard){
    var eGrads = ['linear-gradient(135deg,#E11D2A,#7a0f16)','linear-gradient(135deg,#1f6feb,#0b2f66)','linear-gradient(135deg,#2ea043,#12481f)','linear-gradient(135deg,#d29922,#7a5a10)','linear-gradient(135deg,#8957e5,#3d2668)','linear-gradient(135deg,#e36209,#7a3405)','linear-gradient(135deg,#1b7c83,#0c3a3d)'];
    eylem.forEach(function(w,i){
    var n = (i+1<10?'0':'')+(i+1);
    var el = document.createElement('div'); el.className='ac';
    var items = w[1].map(function(x){ return '<li style="position:relative; padding-left:20px; color:var(--ink-2); font-size:14.5px"><span style="position:absolute; left:0; top:8px; width:7px; height:7px; border-radius:50%; background:var(--red)"></span>'+x+'</li>'; }).join('');
    var banner = '<div class="eylem-banner" style="background:'+eGrads[i%eGrads.length]+'"><div class="eb-topic">'+w[0]+'</div><button type="button" class="eb-cta">Diğerlerini Unutunuz ! Şimdi İncele <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button></div>';
    el.innerHTML = '<button class="q"><span class="n">'+n+'</span><span>'+w[0]+'</span><svg class="pl" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="a">'+banner+'<ul style="margin:0; padding:14px 22px 22px 60px; list-style:none; display:flex; flex-direction:column; gap:10px">'+items+'</ul></div>';
    var q = el.querySelector('.q'), a = el.querySelector('.a');
    q.addEventListener('click', function(){ var open = el.classList.toggle('open'); a.style.maxHeight = open ? (a.scrollHeight+'px') : '0'; });
    var cta = el.querySelector('.eb-cta');
    cta.addEventListener('click', function(e){ e.stopPropagation(); if(window.__openDetay){ window.__openDetay('eylem-'+i, w[0], w[1].join(' · ')); } });
    eboard.appendChild(el);
  }); }

  // Netlify Forms: AJAX submit + inline success (submissions go live once deployed on Netlify)
  function wireForm(formId, msgId){
    var form = document.getElementById(formId), msg = document.getElementById(msgId);
    if(!form || !msg) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var body = new URLSearchParams(new FormData(form)).toString();
      var done = function(){ form.style.display='none'; msg.classList.add('show'); msg.scrollIntoView({behavior:'smooth', block:'center'}); };
      fetch('/', {method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'}, body:body}).then(done).catch(done);
    });
  }
  wireForm('form-katilim','msg-katilim');
  wireForm('form-iletisim','msg-iletisim');

  // ---- Ticari Fırsatlar ----
  var kategoriler = ["Gıda & İçecek","Tekstil & Giyim","Mobilya & Dekorasyon","İnşaat & Yapı Malzemeleri","Otomotiv & Yedek Parça","Elektronik & Beyaz Eşya","Kozmetik & Kişisel Bakım","Temizlik Ürünleri","Tarım & Hayvancılık","Makine & Sanayi","Kırtasiye & Ofis","Ev & Mutfak Ürünleri","Hizmet & Franchise","Diğer"];
  var ticariDemo = [
    {firma:"Anadolu Ev Tekstili", kat:"Tekstil & Giyim", urun:"Nevresim, havlu ve ev tekstili ürünleri.", bolge:"Ege", sehir:"Denizli", ilce:"", ile:"info@ornek.com", foto:[], yeni:false},
    {firma:"Bereket Gıda", kat:"Gıda & İçecek", urun:"Kuru gıda, baklagil ve ambalajlı ürünler.", bolge:"İç Anadolu", sehir:"Konya", ilce:"", ile:"0312 000 00 00", foto:[], yeni:false},
    {firma:"Marmara Mobilya", kat:"Mobilya & Dekorasyon", urun:"Modüler mobilya ve mutfak dolapları.", bolge:"Marmara", sehir:"İstanbul", ilce:"", ile:"satis@ornek.com", foto:[], yeni:false},
    {firma:"Güneş Enerji Sistemleri", kat:"Makine & Sanayi", urun:"Güneş paneli ve kurulum ekipmanları.", bolge:"Akdeniz", sehir:"Antalya", ilce:"", ile:"info@ornek.com", foto:[], yeni:false},
    {firma:"Karadeniz Doğal Ürünler", kat:"Gıda & İçecek", urun:"Çay, fındık ve bal ürünleri.", bolge:"Karadeniz", sehir:"Rize", ilce:"", ile:"0464 000 00 00", foto:[], yeni:false},
    {firma:"Öz Kayseri Mobilya", kat:"Mobilya & Dekorasyon", urun:"Yatak odası ve oturma grupları.", bolge:"İç Anadolu", sehir:"Kayseri", ilce:"", ile:"info@ornek.com", foto:[], yeni:false}
  ];
  var ticari = ticariDemo.slice();
  (function(){
    var list=document.getElementById('ticari-list'); if(!list) return;
    var LIVE = !!SB;
    var fKat=document.getElementById('f-kategori'), fBol=document.getElementById('f-bolge'), fAra=document.getElementById('f-ara');
    var bolgeSec = bolgeler.filter(function(b){return b!=="Tümü";});
    var notice=document.getElementById('ticari-notice');
    function esc(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

    if(notice){
      notice.innerHTML = LIVE
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg><span><b>Canlı.</b> İlanlar kaydedilir. İlan vermek için e-posta ile giriş yapın; bayi arayanlar giriş yapmadan görüntüleyip iletişime geçebilir.</span>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg><span><b>Önizleme.</b> Canlı ilan sistemi (giriş + kayıt + fotoğraf) Supabase anahtarı eklenince otomatik devreye girer. Şu an gönderilen ilanlar kaydedilmez.</span>';
    }

    fKat.innerHTML='<option value="">Tüm kategoriler</option>'+kategoriler.map(function(k){return '<option>'+k+'</option>';}).join('');
    fBol.innerHTML='<option value="">Tüm bölgeler</option>'+bolgeSec.map(function(b){return '<option>'+b+'</option>';}).join('');
    function render(){
      var k=fKat.value, b=fBol.value, q=trLower(fAra.value);
      var rows=ticari.filter(function(x){ return (!k||x.kat===k)&&(!b||x.bolge===b)&&(trLower(x.firma).indexOf(q)>-1||trLower(x.urun).indexOf(q)>-1); });
      if(!rows.length){ list.innerHTML='<div class="ilempty">Eşleşen ilan yok.</div>'; return; }
      list.innerHTML=rows.map(function(x,i){
        var foto=(x.foto&&x.foto.length)?'<img src="'+esc(x.foto[0])+'" alt="" style="width:100%;height:150px;object-fit:cover;border-radius:10px;margin-bottom:12px">':'';
        return '<div class="tcard">'+foto+'<div class="tct"><span class="tcat">'+esc(x.kat)+'</span>'+(x.yeni?'<span class="tnew">yeni</span>':'')+'</div>'+
          '<h3>'+esc(x.firma)+'</h3><p class="tp">'+esc(x.urun)+'</p>'+
          '<div class="treg">Bayi aranan: '+esc(x.bolge)+' · '+esc(x.sehir)+(x.ilce?' · '+esc(x.ilce):'')+'</div>'+
          '<button class="tcontact" data-i="'+i+'">İletişime geç <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button></div>';
      }).join('');
      list.querySelectorAll('.tcontact').forEach(function(btn){
        btn.addEventListener('click', function(){ var x=rows[+btn.getAttribute('data-i')]; btn.outerHTML='<div style="font-weight:600;color:var(--ink);font-size:14px">İletişim: '+esc(x.ile)+'</div>'; });
      });
    }
    [fKat,fBol].forEach(function(el){ el.addEventListener('change',render); });
    fAra.addEventListener('input',render);
    if(LIVE){ ticari=[]; list.innerHTML='<div class="ilempty">İlanlar yükleniyor…</div>'; } else { render(); }

    document.querySelectorAll('.ttab').forEach(function(t){
      t.addEventListener('click', function(){
        document.querySelectorAll('.ttab').forEach(function(x){x.classList.remove('active');});
        document.querySelectorAll('.tpane').forEach(function(x){x.classList.remove('show');});
        t.classList.add('active'); document.getElementById('pane-'+t.getAttribute('data-pane')).classList.add('show');
      });
    });

    var form=document.getElementById('form-ilan');
    var iKat=document.getElementById('i-kategori'), iBol=document.getElementById('i-bolge'), iSeh=document.getElementById('i-sehir'), iFoto=document.getElementById('i-foto'), iThumbs=document.getElementById('i-thumbs');
    iKat.innerHTML=kategoriler.map(function(k){return '<option>'+k+'</option>';}).join('');
    iBol.innerHTML='<option value="">Seçin</option>'+bolgeSec.map(function(b){return '<option>'+b+'</option>';}).join('');
    function fillCities(){
      var b=iBol.value, cs=iller.filter(function(x){return x.b===b;}).map(function(x){return x.il;});
      iSeh.innerHTML = b ? cs.map(function(c){return '<option>'+c+'</option>';}).join('') : '<option value="">Önce bölge seçin</option>';
    }
    iBol.addEventListener('change', fillCities); fillCities();
    iFoto.addEventListener('change', function(){
      iThumbs.innerHTML='';
      Array.prototype.slice.call(iFoto.files).slice(0,6).forEach(function(f){
        var img=document.createElement('img'); img.className='thumb'; img.src=URL.createObjectURL(f); iThumbs.appendChild(img);
      });
    });
    var stat=document.createElement('div'); stat.style.cssText='margin-top:14px;font-size:14px;font-weight:600'; form.appendChild(stat);
    function say(msg,ok){ stat.textContent=msg; stat.style.color= ok? '#227a35' : 'var(--red-d)'; }

    if(!LIVE){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        var firma=document.getElementById('i-firma').value.trim(); if(!firma) return;
        ticari.unshift({ firma:firma, kat:iKat.value, urun:document.getElementById('i-urunler').value.trim()||'—',
          bolge:iBol.value||'—', sehir:iSeh.value||'—', ilce:document.getElementById('i-ilce').value.trim(),
          ile:document.getElementById('i-iletisim').value.trim()||'—', foto:[], yeni:true });
        document.querySelector('.ttab[data-pane="gor"]').click();
        fKat.value=''; fBol.value=''; fAra.value=''; render();
        form.reset(); iThumbs.innerHTML=''; fillCities();
        window.scrollTo({top:document.getElementById('ticari').offsetTop-70, behavior:'smooth'});
      });
      return;
    }

    // ---- CANLI MOD (Supabase) ----
    var formCard=form.closest('.formcard'); if(formCard) formCard.style.display='none';
    var authBox=document.createElement('div'); authBox.className='formcard'; authBox.style.cssText='max-width:760px;margin-bottom:16px';
    authBox.innerHTML =
      '<div id="auth-out"><h3>Firma Girişi</h3><p class="sub">İlan vermek için giriş yapın. İlk kez geliyorsanız e-posta ve şifre belirleyip "Kayıt ol"a basın (şifre en az 6 karakter).</p>'+
      '<div class="field"><label>E-posta</label><input type="email" id="auth-email" autocomplete="username"></div>'+
      '<div class="field"><label>Şifre</label><input type="password" id="auth-pass" autocomplete="current-password"></div>'+
      '<div style="display:flex;gap:10px;flex-wrap:wrap"><button type="button" id="auth-login" class="btn btn-red">Giriş yap</button><button type="button" id="auth-signup" class="btn btn-ghost">Kayıt ol</button></div>'+
      '<div id="auth-msg" style="margin-top:12px;font-size:14px;color:var(--ink-2)"></div></div>'+
      '<div id="auth-in" style="display:none;align-items:center;gap:14px;flex-wrap:wrap"><span>Giriş yapıldı: <b id="auth-who"></b></span><button type="button" id="auth-out-btn" class="btn btn-ghost" style="padding:8px 16px">Çıkış</button></div>';
    if(formCard) formCard.parentNode.insertBefore(authBox, formCard);

    function updateAuth(session){
      var inB=document.getElementById('auth-in'), outB=document.getElementById('auth-out');
      if(session && session.user){
        inB.style.display='flex'; outB.style.display='none';
        document.getElementById('auth-who').textContent=session.user.email||'';
        if(formCard) formCard.style.display='block';
      } else {
        inB.style.display='none'; outB.style.display='block';
        if(formCard) formCard.style.display='none';
      }
    }
    SB.auth.getSession().then(function(r){ updateAuth(r.data.session); });
    SB.auth.onAuthStateChange(function(_e, session){ updateAuth(session); });

    function creds(){ return { email:(document.getElementById('auth-email').value||'').trim(), password:(document.getElementById('auth-pass').value||'') }; }
    document.getElementById('auth-login').addEventListener('click', function(){
      var c=creds(), m=document.getElementById('auth-msg');
      if(!c.email||!c.password){ m.textContent='E-posta ve şifre girin.'; return; }
      m.textContent='Giriş yapılıyor…';
      SB.auth.signInWithPassword(c).then(function(res){
        if(res.error){ m.textContent='Giriş başarısız: '+res.error.message+'  (İlk kez geliyorsanız "Kayıt ol"a basın.)'; }
        else { m.textContent=''; }
      });
    });
    document.getElementById('auth-signup').addEventListener('click', function(){
      var c=creds(), m=document.getElementById('auth-msg');
      if(!c.email||!c.password){ m.textContent='E-posta ve şifre girin.'; return; }
      if(c.password.length<6){ m.textContent='Şifre en az 6 karakter olmalı.'; return; }
      m.textContent='Kayıt oluşturuluyor…';
      SB.auth.signUp(c).then(function(res){
        if(res.error){ m.textContent='Kayıt hatası: '+res.error.message; }
        else if(res.data && res.data.session){ m.textContent=''; }
        else { m.textContent='Kayıt alındı. Şimdi "Giriş yap"a basabilirsiniz.'; }
      });
    });
    document.getElementById('auth-out-btn').addEventListener('click', function(){ SB.auth.signOut(); });

    function loadLive(){
      SB.from('ilanlar').select('*').eq('durum','yayinda').order('created_at',{ascending:false}).then(function(res){
        if(res.error){ list.innerHTML='<div class="ilempty">İlanlar yüklenemedi: '+esc(res.error.message)+'</div>'; return; }
        ticari=(res.data||[]).map(function(r){ return { firma:r.firma, kat:r.kategori, urun:r.urunler||'—', bolge:r.bolge||'—', sehir:r.sehir||'—', ilce:r.ilce||'', ile:r.iletisim, foto:r.fotograflar||[], yeni:false }; });
        render();
      });
    }
    loadLive();

    // Kategoriler: yerleşik 14 temiz kategori + Supabase'de EKLEDİKLERİN (birleştirilir)
    SB.from('kategoriler').select('ad').order('sira',{ascending:true}).then(function(res){
      if(!res.error && res.data && res.data.length){
        var extra = res.data.map(function(r){ return r.ad; }).filter(function(a){ return a && kategoriler.indexOf(a)===-1; });
        if(extra.length){
          kategoriler = kategoriler.concat(extra);
          fKat.innerHTML = '<option value="">Tüm kategoriler</option>'+kategoriler.map(function(k){return '<option>'+esc(k)+'</option>';}).join('');
          iKat.innerHTML = kategoriler.map(function(k){return '<option>'+esc(k)+'</option>';}).join('');
        }
      }
    });

    form.addEventListener('submit', function(e){
      e.preventDefault();
      SB.auth.getSession().then(function(r){
        var session=r.data.session; if(!session){ say('Önce giriş yapın.',false); return; }
        var firma=document.getElementById('i-firma').value.trim(); if(!firma){ say('Firma adı gerekli.',false); return; }
        say('Kaydediliyor…',true);
        var uid=session.user.id, files=Array.prototype.slice.call(iFoto.files).slice(0,6);
        var uploads=files.map(function(f){
          var path=uid+'/'+Date.now()+'-'+Math.random().toString(36).slice(2,7)+'-'+f.name.replace(/[^a-zA-Z0-9._-]/g,'_');
          return SB.storage.from('ilan-fotograflari').upload(path,f).then(function(up){ if(up.error) throw up.error; return SB.storage.from('ilan-fotograflari').getPublicUrl(path).data.publicUrl; });
        });
        Promise.all(uploads).then(function(urls){
          return SB.from('ilanlar').insert({ user_id:uid, firma:firma,
            yetkili:document.getElementById('i-yetkili').value.trim(), iletisim:document.getElementById('i-iletisim').value.trim(),
            kategori:iKat.value, urunler:document.getElementById('i-urunler').value.trim(),
            bolge:iBol.value, sehir:iSeh.value, ilce:document.getElementById('i-ilce').value.trim(), fotograflar:urls });
        }).then(function(ins){
          if(ins.error){ say('Kayıt hatası: '+ins.error.message,false); return; }
          say('İlanınız yayımlandı!',true);
          form.reset(); iThumbs.innerHTML=''; fillCities(); loadLive();
          setTimeout(function(){ document.querySelector('.ttab[data-pane="gor"]').click(); window.scrollTo({top:document.getElementById('ticari').offsetTop-70, behavior:'smooth'}); }, 700);
        }).catch(function(err){ say('Hata: '+(err.message||err),false); });
      });
    });
  })();

  // ---- Haberler & Etkinlikler (Supabase) ----
  (function(){
    var el=document.getElementById('haberler-list'); if(!el || !SB) return;
    function esc(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
    SB.from('haberler').select('*').eq('yayinda',true).order('tarih',{ascending:false}).then(function(res){
      if(res.error || !res.data || !res.data.length) return; // içerik yoksa yer tutucu kalır
      el.innerHTML = res.data.map(function(h){
        var img = h.gorsel ? '<img src="'+esc(h.gorsel)+'" alt="" style="width:100%;height:160px;object-fit:cover;border-radius:10px;margin-bottom:12px">' : '';
        var tarih = h.tarih ? '<div class="kmono" style="color:var(--ink-3);font-size:12px;margin-bottom:6px">'+esc(h.tarih)+'</div>' : '';
        return '<div class="card">'+img+tarih+'<h3 style="font-size:18px;margin:0 0 8px">'+esc(h.baslik)+'</h3><p style="color:var(--ink-2);font-size:14px;margin:0">'+esc(h.ozet||'')+'</p></div>';
      }).join('');
    });
  })();

  // ---- Detay sayfasına yönlendirme ----
  (function(){
    function openM(key, baslik, summary){
      var u='detay.html?k='+encodeURIComponent(key)+'&t='+encodeURIComponent(baslik||'');
      if(summary){ u+='&s='+encodeURIComponent(summary); }
      location.href=u;
    }
    window.__openDetay = openM;
    document.querySelectorAll('[data-detay]').forEach(function(el){
      function go(){ var p=el.querySelector('p'); openM(el.getAttribute('data-detay'), el.getAttribute('data-baslik')||'', p?p.textContent:''); }
      el.addEventListener('click', go);
      el.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); go(); } });
    });
  })();

  var revs = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) { revs.forEach(function(el){el.classList.add('in')}); }
  else {
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }); }, {threshold:.1, rootMargin:'0px 0px -6% 0px'});
    revs.forEach(function(el){ io.observe(el); });
  }
