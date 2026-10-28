<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>الأميرة</title>
    <script type="module" src="index.js" defer></script>
</head>
<body>
    <header>
        <div class="header-container">
            <nav>
                <a href="/" class="brand-logo"><img src="assets/images/logo.jpg" alt="brand logo"></a>
                <!-- <a href="/" class="brand-name">الأميرة</a> -->
                <div class="nav-controls">

                    <button class="burger-menu" id="burger-menu" aria-label="">
                        <div class="bar" id="bar1"></div>
                        <div class="bar" id="bar2"></div>
                        <div class="bar" id="bar3"></div>
                    </button>
                
                    <ul class="menu " id="menu">
                        <li class="menu-item"><a href="#home">الرئيسية</a></li>
                        <li class="menu-item"><a href="#benefits">لماذا الأميرة</a></li>
                        <li class="menu-item"><a href="#products">منتجاتنا</a></li>
                        <li class="menu-item"><a href="#testimonials">آراء الأميرات</a></li>
                        <li class="menu-item"><a href="#faq">الاسئلة الشائعة</a></li>
                        <li class="menu-item"><a href="#newsletter">تواصل</a></li>
                        <li class="cta-button"><a href="#products" class="cta-link">اطلبي الآن</a></li>
                    </ul>
                </div>
            
            </nav>
        </div>
    </header>
    <main>

        <section class="hero" id="home">
            <div class="hero-content">
                <h1 class="hero-title">نغذي بشرتك بما تستحق</h1>
                <p class="section-text">اكتشفي سر النضارة الدائمة مع مجموعتنا الحصرية من منتجات العناية بالبشرة الطبيعية 100%. صُنعت تركيباتنا بعناية فائقة من مستخلصات نباتية نقية لتمنح بشرتك الغذاء العميق، والترطيب المثالي، والإشراقة الحيوية التي طالما حلمتِ بها.</p>
                <div class="cta-button">
                    <a href="#products" class="cta-link">تسوقي الآن</a>
                </div>

            </div>
            <img src="assets/images/hero.jpg" alt="Skin care product" class="hero-image">
            
        </section>
        <!-- hero section ends -->

        <section class="benefits" id="benefits">
            <h3 class="section-title">لماذا منتجات الأميرة؟</h3>
            <div class="benefit-cards-container">
                <div class="benefit-card">
                    <h4 class="benefit-card-title">🌿 مكونات طبيعية 100%</h4>
                    <p class="benefit-card-text">ودّعي المواد الكيميائية القاسية، وامنحي بشرتكِ حيوية دائمة مع تركيباتنا النباتية النقية والمختارة بعناية.</p>
                </div>

                <div class="benefit-card">
                    <h4 class="benefit-card-title">🌟 نتائج حقيقية من أول اسبوع.</h4>
                    <p class="benefit-card-text">صُممت خصيصاً لتدعم مرونة بشرتكِ وتوازنها، وتمنحها الترطيب المثالي تحت أي ظرف مناخي و ستلاحظين تألقها من اول اسبوع.</p>
                </div>

                <div class="benefit-card">
                    <h4 class="benefit-card-title">✨ افضل الخامات</h4>
                    <p class="benefit-card-text">تركيبة صُممت خصيصاً لتمنح بشرتكِ أقصى درجات الصحة والأمان، وتناسب مختلف أنواع البشرة.
</p>
                </div>

                <div class="benefit-card">
                    <h4 class="benefit-card-title">🚚 توصيل سريع</h4>
                    <p class="benefit-card-text">لدينا خدمة توصيل الى جميع المحافظات</p>
                </div>


            </div><!-- small-cards-container end-->
        </section><!-- why-pure-glow section end-->


<!-- here is the place of products section-->

        <!-- <section class="best-seller">  -Best seller start-->
            
        <!--Best seller end-->

<!-- Testimonials section -->
        <section class="testimonials" id="testimonials">   <!--Testimonials start-->
            <h3 class="section-title">آراء الأميرات&#9829;</h3>
            <div class="testimonials-container">
                
                <div class="testimonial-card">
                    <div class="image-rating-container">
                        <img src="assets/images/woman.png" alt="customer photo" class="customer-photo">
                            <div class="rating">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                            </div>
                    </div>
                    <p class="review-text">استخدمت الورس لبشرتي وكانت النتيجة مذهلة حقاً، لاحظت نضارة فورية وتوحيداً ملحوظاً في لون البشرة خلال وقت قصير. أنصح بشدة بإضافته لروتينك اليومي للعناية.</p>
                    <p class="name">عبير</p>
                </div>

                <div class="testimonial-card">
                    <div class="image-rating-container">
                        <img src="assets/images/woman.png" alt="customer photo" class="customer-photo">
                            <div class="rating">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                            </div>
                    </div>
                    <p class="review-text">"هذا الصابون رائع جداً في تنظيف البشرة والتخلص من التصبغات الداكنة. أصبحت بشرتي أكثر إشراقاً ونعومة بعد استخدامه، وأنصح الجميع بتجربته للحصول على مظهر متألق."</p>
                    <p class="name">صفاء عبدالرحمن<br>Graphic Designer at Bloom Creative</p>
                </div>

                <div class="testimonial-card">
                    <div class="image-rating-container">
                        <img src="assets/images/woman.png" alt="customer photo" class="customer-photo">
                            <div class="rating">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                            </div>
                    </div>
                    <p class="review-text">"تجربتي مع عشبة الوسمة كانت ممتازة للغاية، أعادت الحيوية لشعري و غطت الشيب بشكل طبيعي وجعلت مظهري يبدو أكثر صحة وشباباً. منتج طبيعي يستحق التجربة وضعتها على شعري فقط لمدة نصف ساعة و كانت النتيجة رائعة."</p>
                    <p class="name">ام سالم محسن<br>Content Creator</p>
                </div>

                <div class="testimonial-card">
                     <div class="image-rating-container">
                        <img src="assets/images/woman.png" alt="customer photo" class="customer-photo">
                            <div class="rating">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                                <img src="assets/images/star-svgrepo-com.svg" alt="">
                            </div>
                    </div>
                    <p class="review-text">يعتبر مقشر قشر البرتقال خياري المفضل للتخلص من الخلايا الميتة وإعادة النضارة للوجه. يترك البشرة ناعمة ومنتعشة برائحة زكية، أنصح بإستخدامه أسبوعياً لنتائج مثالية.</p>
                    <p class="name">ام احمد فاروق</p>
                </div>

                
            </div>
        </section> <!--Testimonials end-->


 <!--FAQ section-->

        <section class="newsletter" id="newsletter">
            <form class="form-container"
                id="sign-up-form"
                action="https://api.web3forms.com/submit"
                method="POST"
                novalidate>
                
                <div class="label-error-container">           
                <label for="user-email">البريد الالكتروني</label>
                <p id="error-message" class="error-message hide">Valid email required</p>
                </div>
                <input type="email" id="user-email" name= "email" placeholder="email@company.com" required>
                <button type="submit" class="submit-button">اشتراك</button>
            </form>


        </section>

    </main>

        <footer>
            <div class="footer-container" id="contact">
                <div class="footer-divs-container">
                    <div class="pure-glow">
                        <a href="/" class="brand-logo"><img src="assets/images/logo.jpg" alt="brand logo"></a>
                        <!-- <h4 class="logo">الأميرة<br>Princess</h4> -->
                        <p class="footer-text">عناية طبيعية بالبشرة صُممت خصيصاً لتغذية بشرتك وحمايتها.</p>
                        <ul class="social-icons">
                            <li class="social-icon"><a href="https://instagram.com\"><img class="social-logo" src="assets/images/instagram.svg" alt="instagram logo" class="instagram-icon"></a></li>
                            <li class="social-icon"><a href="https://facebook.com\"><img class="social-logo" src="assets/images/facebook.svg" alt="facebook logo" class="facebook-icon"></a></li>
                            <li class="social-icon"><a href="https://pinterest.com\"><img class="social-logo" src="assets/images/icons8-pinterest-48.png" alt="pinterest logo" class="Pinterest-icon"></a></li>
                            <li class="social-icon"><a href="https://tiktok.com\"><img class="social-logo" src="assets/images/icons8-tik-tok-50.png" alt="tik tok logo" class="tik-tok-icon"></a></li>
                        </ul>
                    </div>
                    <div class="quick-links">
                        <ul class="footer-links">
                            <li class="footer-item"><a href="#home">الرئيسية</a></li>
                            <li class="footer-item"><a href="#products">منتجاتنا</a></li>
                            <li class="footer-item"><a href="#benefits">لماذا الأميرة</a></li>
                            <li class="footer-item"><a href="#testimonials">آراء الأميرات</a></li>
                            <li class="footer-item"><a href="#faq">الاسئلة الشائعة</a></li>
                            <li class="footer-item"><a href="#contact">تواصل</a></li>
                        </ul>

                    </div><!--qick-links end-->

                    <div class="footer-contact">
                        <p class="footer-text"><a href="mailto:rab3asalem@gmail.com">rab3asalem@gmail.com</a></p>
                        <p class="footer-text">+967 رقم التواصل</p>
                        <p class="footer-text">عدن/ اليمن</p>
                    </div>

                    <div class="footer-stay-updated">
                        <p class="footer-text">انضمي إلى نشرتنا البريدية للحصول على نصائح حصرية للعناية بالبشرة.</p>
                        <a href="#newsletter">اشتراك</a>
                    </div>


                </div>   <!--footer divs container end-->
                <div class="attributes">
                    <p class="copy-write">@ 2026 الأميرة</p>
                    <p class="dev-name">تصميم و برمجة <a href="https://wa.me/967780061237">رابعة ربيع</a></p>
                </div>
            </div>
        </footer>
        <a href="https://wa.me/967780061237"><img src="assets/images/whatsapp.svg" alt="whatsapp button" class="whatsapp-logo"></a>
    
</body>
</html>



