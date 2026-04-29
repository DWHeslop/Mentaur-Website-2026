# Mentaur-Website-2026
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mentaur — The mentor you've always needed</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,800;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0;}
:root{
  --navy:#0A1628;--royal:#1B3F6E;--steel:#3A74B5;--ice:#D6E4F7;
  --horizon:#EAF2FC;--sage:#4A7C5F;--sage-lt:#EAF3DE;
  --white:#FFFFFF;--off:#F0F5FF;
  --serif:'Playfair Display',serif;--sans:'DM Sans',sans-serif;
}
html{scroll-behavior:smooth;}
body{background:var(--navy);color:var(--white);font-family:var(--sans);overflow-x:hidden;}

/* ── Scrollbar ── */
::-webkit-scrollbar{width:4px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:var(--royal);border-radius:4px;}

/* ── NAV ── */
nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:0 40px;height:60px;display:flex;align-items:center;justify-content:space-between;background:rgba(10,22,40,0.92);backdrop-filter:blur(12px);border-bottom:0.5px solid rgba(214,228,247,0.08);}
.nav-logo{font-family:var(--serif);font-size:22px;font-weight:800;letter-spacing:-0.5px;}
.nav-logo em{color:var(--steel);font-style:italic;}
.nav-links{display:flex;gap:32px;align-items:center;}
.nav-link{font-size:13px;color:rgba(214,228,247,0.55);cursor:pointer;transition:color .2s;font-weight:400;letter-spacing:0.2px;text-decoration:none;}
.nav-link:hover{color:var(--ice);}
.nav-cta{background:var(--steel);color:var(--white);border:none;padding:8px 20px;border-radius:6px;font-family:var(--sans);font-size:13px;font-weight:500;cursor:pointer;transition:background .2s;}
.nav-cta:hover{background:#4A84C5;}

/* ── HERO ── */
.hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 40px 60px;position:relative;overflow:hidden;}
.hero-bg{position:absolute;inset:0;z-index:0;}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(58,116,181,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(58,116,181,0.06) 1px,transparent 1px);background-size:60px 60px;}
.hero-glow{position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(58,116,181,0.18) 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-60%);}
.hero-content{position:relative;z-index:1;max-width:780px;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(58,116,181,0.15);border:0.5px solid rgba(58,116,181,0.4);border-radius:40px;padding:6px 16px;font-size:12px;color:var(--ice);font-weight:500;letter-spacing:0.5px;margin-bottom:32px;}
.hero-badge-dot{width:6px;height:6px;border-radius:50%;background:var(--sage);animation:pulse 2s ease-in-out infinite;}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.4;}}
.hero h1{font-family:var(--serif);font-size:clamp(42px,7vw,76px);font-weight:800;line-height:1.08;letter-spacing:-1.5px;margin-bottom:24px;}
.hero h1 em{color:var(--steel);font-style:italic;}
.hero-sub{font-size:clamp(15px,2vw,19px);color:rgba(214,228,247,0.65);line-height:1.75;max-width:560px;margin:0 auto 40px;font-weight:300;}
.hero-actions{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:60px;}
.btn-primary{background:var(--steel);color:var(--white);border:none;padding:14px 32px;border-radius:8px;font-family:var(--sans);font-size:15px;font-weight:500;cursor:pointer;transition:all .2s;letter-spacing:0.2px;}
.btn-primary:hover{background:#4A84C5;transform:translateY(-1px);}
.btn-ghost{background:transparent;color:var(--ice);border:0.5px solid rgba(214,228,247,0.3);padding:14px 28px;border-radius:8px;font-family:var(--sans);font-size:15px;font-weight:400;cursor:pointer;transition:all .2s;}
.btn-ghost:hover{border-color:var(--ice);}
.hero-stats{display:flex;gap:48px;justify-content:center;flex-wrap:wrap;}
.hero-stat .n{font-family:var(--serif);font-size:32px;font-weight:700;color:var(--ice);}
.hero-stat .l{font-size:12px;color:rgba(214,228,247,0.45);margin-top:2px;letter-spacing:0.3px;}

/* ── SCROLL INDICATOR ── */
.scroll-hint{position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;color:rgba(214,228,247,0.3);font-size:11px;letter-spacing:1px;animation:bounce 2s ease-in-out infinite;}
@keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0);}50%{transform:translateX(-50%) translateY(6px);}}
.scroll-arrow{width:20px;height:20px;border-right:1px solid rgba(214,228,247,0.3);border-bottom:1px solid rgba(214,228,247,0.3);transform:rotate(45deg);}

/* ── SECTION WRAPPER ── */
.section{padding:100px 40px;max-width:1100px;margin:0 auto;}
.section-label{font-size:11px;font-weight:500;letter-spacing:2.5px;text-transform:uppercase;color:var(--steel);margin-bottom:16px;}
.section-h{font-family:var(--serif);font-size:clamp(32px,5vw,52px);font-weight:700;line-height:1.12;letter-spacing:-0.8px;margin-bottom:20px;}
.section-h em{color:var(--steel);font-style:italic;}
.section-sub{font-size:17px;color:rgba(214,228,247,0.6);line-height:1.75;max-width:560px;font-weight:300;}

/* ── PROBLEM SECTION ── */
.problem-section{background:var(--navy);padding:80px 40px;}
.problem-inner{max-width:1100px;margin:0 auto;}
.problem-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1px;background:rgba(214,228,247,0.08);border:0.5px solid rgba(214,228,247,0.08);border-radius:16px;overflow:hidden;margin-top:60px;}
.problem-card{background:var(--navy);padding:36px 32px;position:relative;}
.problem-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--royal),transparent);opacity:0;transition:opacity .3s;}
.problem-card:hover::before{opacity:1;}
.problem-num{font-family:var(--serif);font-size:48px;font-weight:700;color:rgba(58,116,181,0.2);line-height:1;margin-bottom:16px;}
.problem-card h3{font-size:17px;font-weight:500;color:var(--ice);margin-bottom:10px;}
.problem-card p{font-size:14px;color:rgba(214,228,247,0.5);line-height:1.7;font-weight:300;}

/* ── APP DEMO ── */
.demo-section{padding:100px 0;background:linear-gradient(180deg,var(--navy) 0%,#060E1A 100%);}
.demo-inner{max-width:1100px;margin:0 auto;padding:0 40px;}
.demo-tabs{display:flex;gap:4px;background:rgba(214,228,247,0.06);border:0.5px solid rgba(214,228,247,0.1);border-radius:12px;padding:4px;margin-bottom:40px;width:fit-content;}
.demo-tab{padding:9px 22px;border-radius:9px;font-family:var(--sans);font-size:13px;font-weight:500;cursor:pointer;transition:all .25s;color:rgba(214,228,247,0.45);border:none;background:transparent;}
.demo-tab.active{background:var(--royal);color:var(--ice);}
.demo-tab:hover:not(.active){color:var(--ice);}

/* ── BROWSER CHROME ── */
.browser{background:#0D1A2E;border:0.5px solid rgba(214,228,247,0.12);border-radius:16px;overflow:hidden;box-shadow:0 40px 80px rgba(0,0,0,0.5);}
.browser-bar{background:#071020;padding:12px 16px;display:flex;align-items:center;gap:12px;border-bottom:0.5px solid rgba(214,228,247,0.07);}
.browser-dots{display:flex;gap:6px;}
.browser-dot{width:10px;height:10px;border-radius:50%;}
.browser-dot:nth-child(1){background:#FF5F57;}
.browser-dot:nth-child(2){background:#FFBD2E;}
.browser-dot:nth-child(3){background:#28CA41;}
.browser-url{flex:1;background:rgba(214,228,247,0.06);border-radius:6px;padding:6px 14px;font-size:12px;color:rgba(214,228,247,0.3);font-family:var(--sans);}

/* ── APP CHROME ── */
.app-nav{background:#071020;padding:0 24px;height:52px;display:flex;align-items:center;justify-content:space-between;border-bottom:0.5px solid rgba(214,228,247,0.08);}
.app-logo{font-family:var(--serif);font-size:20px;font-weight:800;}
.app-logo em{color:var(--steel);font-style:italic;}
.app-nav-links{display:flex;gap:28px;}
.app-nav-link{font-size:12px;color:rgba(214,228,247,0.35);cursor:pointer;font-weight:400;padding-bottom:2px;border-bottom:1.5px solid transparent;transition:all .2s;}
.app-nav-link.on{color:var(--ice);border-bottom-color:var(--steel);}
.app-avatar{width:30px;height:30px;border-radius:50%;background:var(--steel);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:500;color:var(--ice);}

/* ── SCREEN PANELS ── */
.screen{display:none;animation:fadeIn .3s ease;}
.screen.active{display:block;}
@keyframes fadeIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}
.screen-body{padding:28px 28px;background:#0A1628;}

/* ── FEED STYLES ── */
.feed-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px;}
.feed-greeting{font-size:13px;color:rgba(214,228,247,0.45);margin-bottom:4px;}
.feed-title{font-family:var(--serif);font-size:22px;font-weight:600;color:var(--ice);}
.feed-controls{display:flex;gap:6px;}
.feed-btn{padding:6px 16px;border-radius:20px;font-size:12px;font-weight:500;cursor:pointer;transition:all .2s;border:none;}
.feed-btn.on{background:rgba(214,228,247,0.12);color:var(--ice);}
.feed-btn.off{background:transparent;color:rgba(214,228,247,0.35);border:0.5px solid rgba(214,228,247,0.12);}
.post{background:#0D1A2E;border:0.5px solid rgba(214,228,247,0.1);border-radius:12px;padding:20px;margin-bottom:12px;transition:border-color .2s;}
.post:hover{border-color:rgba(214,228,247,0.2);}
.post-head{display:flex;gap:12px;align-items:center;margin-bottom:14px;}
.av{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:500;flex-shrink:0;}
.av-1{background:var(--royal);color:var(--ice);}
.av-2{background:var(--sage);color:var(--sage-lt);}
.av-3{background:#5A4A8A;color:#E8E0F8;}
.post-meta{flex:1;}
.post-name{font-size:14px;font-weight:500;color:var(--ice);display:flex;align-items:center;gap:6px;}
.verified{font-size:10px;background:rgba(58,116,181,0.2);border:0.5px solid rgba(58,116,181,0.4);color:var(--steel);padding:2px 7px;border-radius:10px;font-weight:500;}
.post-role{font-size:12px;color:rgba(214,228,247,0.4);margin-top:2px;}
.post-tag{font-size:10px;font-weight:500;padding:3px 9px;border-radius:10px;white-space:nowrap;}
.tag-insight{background:rgba(27,63,110,0.4);border:0.5px solid rgba(27,63,110,0.6);color:#7AAEE0;}
.tag-milestone{background:rgba(74,124,95,0.3);border:0.5px solid rgba(74,124,95,0.5);color:#8FD4AA;}
.tag-session{background:rgba(58,116,181,0.2);border:0.5px solid rgba(58,116,181,0.4);color:var(--steel);}
.post-body{font-size:14px;color:rgba(214,228,247,0.7);line-height:1.7;margin-bottom:14px;font-weight:300;}
.post-body strong{color:var(--ice);font-weight:500;}
.post-actions{display:flex;gap:20px;}
.post-action{font-size:12px;color:rgba(214,228,247,0.35);cursor:pointer;transition:color .2s;}
.post-action:hover{color:var(--steel);}
.session-reminder{background:linear-gradient(135deg,rgba(27,63,110,0.4),rgba(10,22,40,0.4));border:0.5px solid rgba(58,116,181,0.3);border-radius:12px;padding:16px 20px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:center;}
.session-reminder-text{font-size:13px;color:var(--ice);}
.session-reminder-sub{font-size:12px;color:rgba(214,228,247,0.45);margin-top:3px;}
.session-reminder-btn{background:var(--steel);color:var(--white);border:none;padding:7px 16px;border-radius:7px;font-size:12px;font-weight:500;cursor:pointer;}

/* ── DISCOVER SCREEN ── */
.search-bar{display:flex;align-items:center;gap:12px;background:#0D1A2E;border:0.5px solid rgba(214,228,247,0.12);border-radius:10px;padding:11px 16px;margin-bottom:16px;}
.search-icon{width:16px;height:16px;flex-shrink:0;opacity:0.4;}
.search-input{background:transparent;border:none;outline:none;color:var(--ice);font-family:var(--sans);font-size:14px;flex:1;font-weight:300;}
.search-input::placeholder{color:rgba(214,228,247,0.25);}
.filter-row{display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap;}
.filter-pill{padding:5px 14px;border-radius:20px;font-size:12px;cursor:pointer;transition:all .2s;border:0.5px solid rgba(214,228,247,0.12);color:rgba(214,228,247,0.45);background:transparent;font-family:var(--sans);}
.filter-pill.on{background:rgba(58,116,181,0.2);border-color:rgba(58,116,181,0.5);color:var(--steel);}
.filter-pill:hover:not(.on){color:var(--ice);border-color:rgba(214,228,247,0.25);}
.mentor-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;}
.mentor-card{background:#0D1A2E;border:0.5px solid rgba(214,228,247,0.1);border-radius:12px;padding:20px;cursor:pointer;transition:all .25s;position:relative;overflow:hidden;}
.mentor-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;opacity:0;transition:opacity .25s;}
.mentor-card.m1::before{background:linear-gradient(90deg,var(--steel),transparent);}
.mentor-card.m2::before{background:linear-gradient(90deg,var(--sage),transparent);}
.mentor-card.m3::before{background:linear-gradient(90deg,#7F6FBB,transparent);}
.mentor-card.m4::before{background:linear-gradient(90deg,#B07050,transparent);}
.mentor-card:hover{border-color:rgba(214,228,247,0.2);transform:translateY(-2px);}
.mentor-card:hover::before{opacity:1;}
.mentor-card-head{display:flex;gap:12px;align-items:flex-start;margin-bottom:14px;}
.av-lg{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:500;flex-shrink:0;font-family:var(--serif);}
.mentor-card-info{flex:1;}
.mentor-name{font-size:15px;font-weight:500;color:var(--ice);margin-bottom:2px;}
.mentor-title{font-size:12px;color:rgba(214,228,247,0.45);line-height:1.5;}
.mentor-avail{width:8px;height:8px;border-radius:50%;background:var(--sage);flex-shrink:0;margin-top:6px;}
.mentor-avail.na{background:rgba(214,228,247,0.2);}
.mentor-bio{font-size:13px;color:rgba(214,228,247,0.5);line-height:1.6;margin-bottom:14px;font-weight:300;}
.mentor-tags{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:14px;}
.mentor-tag{font-size:11px;background:rgba(214,228,247,0.06);border:0.5px solid rgba(214,228,247,0.1);color:rgba(214,228,247,0.5);padding:3px 9px;border-radius:6px;}
.mentor-meta{display:flex;justify-content:space-between;align-items:center;}
.mentor-rating{font-size:13px;color:#F5C842;font-weight:500;}
.mentor-sessions{font-size:11px;color:rgba(214,228,247,0.35);}
.connect-btn{background:var(--royal);color:var(--ice);border:none;padding:7px 16px;border-radius:7px;font-size:12px;font-weight:500;cursor:pointer;transition:all .2s;font-family:var(--sans);}
.connect-btn:hover{background:var(--steel);}

/* ── RELATIONSHIPS SCREEN ── */
.rel-card{background:#0D1A2E;border:0.5px solid rgba(214,228,247,0.1);border-radius:12px;padding:20px;margin-bottom:12px;}
.rel-head{display:flex;gap:14px;align-items:center;margin-bottom:16px;}
.rel-info h3{font-size:15px;font-weight:500;color:var(--ice);margin-bottom:3px;}
.rel-info p{font-size:12px;color:rgba(214,228,247,0.4);}
.rel-stats{display:flex;gap:20px;padding:12px 0;border-top:0.5px solid rgba(214,228,247,0.07);border-bottom:0.5px solid rgba(214,228,247,0.07);margin-bottom:14px;}
.rel-stat .n{font-size:18px;font-weight:500;color:var(--ice);font-family:var(--serif);}
.rel-stat .l{font-size:11px;color:rgba(214,228,247,0.35);margin-top:2px;}
.goal-progress{margin-bottom:14px;}
.goal-label{display:flex;justify-content:space-between;margin-bottom:6px;}
.goal-label span:first-child{font-size:13px;color:rgba(214,228,247,0.7);}
.goal-label span:last-child{font-size:12px;color:var(--steel);}
.goal-bar{height:5px;background:rgba(214,228,247,0.08);border-radius:3px;overflow:hidden;}
.goal-fill{height:100%;border-radius:3px;background:var(--steel);transition:width 1s ease;}
.rel-actions{display:flex;gap:8px;}
.rel-btn{font-size:12px;font-weight:500;padding:7px 16px;border-radius:7px;cursor:pointer;transition:all .2s;border:none;font-family:var(--sans);}
.rel-btn.primary{background:var(--royal);color:var(--ice);}
.rel-btn.primary:hover{background:var(--steel);}
.rel-btn.ghost{background:transparent;color:rgba(214,228,247,0.45);border:0.5px solid rgba(214,228,247,0.12);}
.rel-btn.ghost:hover{color:var(--ice);border-color:rgba(214,228,247,0.3);}
.session-next{display:flex;align-items:center;gap:8px;background:rgba(74,124,95,0.12);border:0.5px solid rgba(74,124,95,0.3);border-radius:8px;padding:10px 14px;margin-bottom:14px;}
.session-next-dot{width:7px;height:7px;border-radius:50%;background:var(--sage);flex-shrink:0;}
.session-next-text{font-size:13px;color:rgba(214,228,247,0.7);}
.session-next-time{font-size:12px;color:var(--sage);font-weight:500;}

/* ── VAULT SCREEN ── */
.vault-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;}
.vault-title{font-family:var(--serif);font-size:22px;font-weight:600;color:var(--ice);}
.vault-upload-btn{background:var(--royal);color:var(--ice);border:none;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:500;cursor:pointer;transition:background .2s;font-family:var(--sans);}
.vault-upload-btn:hover{background:var(--steel);}
.vault-nda{background:rgba(74,124,95,0.12);border:0.5px solid rgba(74,124,95,0.3);border-radius:10px;padding:12px 16px;margin-bottom:20px;display:flex;align-items:center;gap:10px;font-size:13px;color:rgba(214,228,247,0.65);}
.vault-nda-icon{width:18px;height:18px;flex-shrink:0;}
.doc-item{background:#0D1A2E;border:0.5px solid rgba(214,228,247,0.1);border-radius:10px;padding:16px 18px;margin-bottom:8px;display:flex;gap:14px;align-items:center;cursor:pointer;transition:border-color .2s;}
.doc-item:hover{border-color:rgba(214,228,247,0.22);}
.doc-icon{width:40px;height:40px;background:rgba(214,228,247,0.07);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;}
.doc-meta{flex:1;}
.doc-name{font-size:14px;font-weight:500;color:var(--ice);margin-bottom:3px;}
.doc-info{font-size:12px;color:rgba(214,228,247,0.35);}
.doc-access{font-size:12px;font-weight:500;}
.doc-access.shared{color:var(--sage);}
.doc-access.private{color:rgba(214,228,247,0.3);}
.activity-log{background:rgba(214,228,247,0.04);border-radius:8px;padding:12px 14px;margin-top:8px;font-size:12px;color:rgba(214,228,247,0.4);line-height:1.8;}
.activity-log span{color:var(--steel);}

/* ── PROFILE SCREEN ── */
.profile-cover{height:90px;background:linear-gradient(135deg,#0D1A2E 0%,#102040 50%,#0A1628 100%);border-radius:12px 12px 0 0;position:relative;margin-bottom:44px;overflow:hidden;}
.profile-cover::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 30% 50%,rgba(58,116,181,0.15),transparent 70%);}
.profile-avatar-wrap{position:absolute;bottom:-34px;left:24px;}
.profile-avatar{width:68px;height:68px;border-radius:50%;background:var(--steel);display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-size:22px;font-weight:700;color:var(--white);border:3px solid var(--navy);}
.profile-header{padding:0 24px;display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;}
.profile-name{font-family:var(--serif);font-size:20px;font-weight:700;color:var(--ice);margin-bottom:4px;}
.profile-role{font-size:13px;color:rgba(214,228,247,0.5);}
.profile-plan{font-size:11px;font-weight:500;background:rgba(58,116,181,0.15);border:0.5px solid rgba(58,116,181,0.35);color:var(--steel);padding:4px 12px;border-radius:20px;}
.profile-stats-row{display:flex;gap:8px;padding:0 24px;margin-bottom:20px;}
.profile-stat{background:rgba(214,228,247,0.05);border:0.5px solid rgba(214,228,247,0.08);border-radius:10px;padding:14px;flex:1;text-align:center;}
.profile-stat .n{font-family:var(--serif);font-size:22px;font-weight:700;color:var(--ice);}
.profile-stat .l{font-size:11px;color:rgba(214,228,247,0.35);margin-top:3px;}
.profile-section{padding:0 24px;margin-bottom:20px;}
.profile-section-label{font-size:11px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;color:rgba(214,228,247,0.3);margin-bottom:10px;}
.profile-bio{font-size:14px;color:rgba(214,228,247,0.6);line-height:1.7;font-weight:300;}
.goal-chip{display:inline-flex;align-items:center;gap:5px;background:rgba(58,116,181,0.12);border:0.5px solid rgba(58,116,181,0.25);color:var(--steel);padding:5px 12px;border-radius:20px;font-size:12px;margin:3px;}

/* ── FEATURES SECTION ── */
.features-section{background:#060E1A;padding:100px 40px;}
.features-inner{max-width:1100px;margin:0 auto;}
.features-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1px;background:rgba(214,228,247,0.06);border-radius:16px;overflow:hidden;margin-top:60px;}
.feature-block{background:#060E1A;padding:40px 36px;position:relative;overflow:hidden;}
.feature-block::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 0% 0%,rgba(58,116,181,0.08),transparent 60%);opacity:0;transition:opacity .3s;}
.feature-block:hover::after{opacity:1;}
.feature-icon{width:44px;height:44px;border-radius:10px;background:rgba(27,63,110,0.4);border:0.5px solid rgba(27,63,110,0.6);display:flex;align-items:center;justify-content:center;margin-bottom:20px;}
.feature-icon svg{width:20px;height:20px;stroke:var(--steel);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}
.feature-h{font-size:18px;font-weight:500;color:var(--ice);margin-bottom:10px;font-family:var(--serif);}
.feature-p{font-size:14px;color:rgba(214,228,247,0.5);line-height:1.7;font-weight:300;}

/* ── TIERS ── */
.tiers-section{padding:100px 40px;background:var(--navy);}
.tiers-inner{max-width:1100px;margin:0 auto;}
.tiers-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:60px;}
.tier-card{background:#0D1A2E;border:0.5px solid rgba(214,228,247,0.1);border-radius:16px;padding:28px 24px;position:relative;transition:transform .25s;}
.tier-card:hover{transform:translateY(-3px);}
.tier-card.featured{border-color:rgba(58,116,181,0.5);border-width:1.5px;}
.tier-popular{position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:var(--steel);color:var(--white);font-size:11px;font-weight:500;padding:3px 14px;border-radius:20px;white-space:nowrap;}
.tier-name-label{font-size:11px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;color:rgba(214,228,247,0.35);margin-bottom:6px;}
.tier-name{font-family:var(--serif);font-size:22px;font-weight:700;color:var(--ice);margin-bottom:8px;}
.tier-price{font-size:34px;font-weight:700;color:var(--ice);font-family:var(--serif);line-height:1;}
.tier-period{font-size:13px;color:rgba(214,228,247,0.35);margin-bottom:20px;margin-top:4px;}
.tier-divider{height:0.5px;background:rgba(214,228,247,0.08);margin-bottom:20px;}
.tier-feat{font-size:13px;color:rgba(214,228,247,0.6);padding:5px 0;display:flex;gap:8px;align-items:flex-start;font-weight:300;}
.tier-feat::before{content:'✓';color:var(--sage);flex-shrink:0;font-size:12px;margin-top:1px;}
.tier-feat.no{color:rgba(214,228,247,0.25);}
.tier-feat.no::before{content:'—';color:rgba(214,228,247,0.2);}
.tier-cta{width:100%;margin-top:24px;padding:11px;border-radius:8px;font-family:var(--sans);font-size:14px;font-weight:500;cursor:pointer;transition:all .2s;border:none;}
.tier-cta.solid{background:var(--steel);color:var(--white);}
.tier-cta.solid:hover{background:#4A84C5;}
.tier-cta.outline{background:transparent;color:rgba(214,228,247,0.6);border:0.5px solid rgba(214,228,247,0.2);}
.tier-cta.outline:hover{border-color:var(--ice);color:var(--ice);}

/* ── SOCIAL PROOF ── */
.proof-section{padding:80px 40px;background:#060E1A;}
.proof-inner{max-width:1100px;margin:0 auto;}
.proof-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin-top:50px;}
.proof-card{background:#0A1628;border:0.5px solid rgba(214,228,247,0.1);border-radius:14px;padding:28px 26px;}
.proof-quote{font-family:var(--serif);font-size:15px;color:rgba(214,228,247,0.75);line-height:1.7;margin-bottom:20px;font-style:italic;}
.proof-author{display:flex;gap:10px;align-items:center;}
.proof-av{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:500;flex-shrink:0;}
.proof-name{font-size:13px;font-weight:500;color:var(--ice);}
.proof-role{font-size:12px;color:rgba(214,228,247,0.4);}

/* ── CTA ── */
.cta-section{padding:100px 40px;text-align:center;background:var(--navy);position:relative;overflow:hidden;}
.cta-glow{position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(58,116,181,0.15) 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);}
.cta-inner{position:relative;z-index:1;max-width:620px;margin:0 auto;}
.cta-h{font-family:var(--serif);font-size:clamp(32px,5vw,52px);font-weight:800;line-height:1.1;margin-bottom:20px;letter-spacing:-0.8px;}
.cta-h em{color:var(--steel);font-style:italic;}
.cta-sub{font-size:17px;color:rgba(214,228,247,0.55);line-height:1.7;margin-bottom:40px;font-weight:300;}
.cta-actions{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:20px;}
.cta-note{font-size:13px;color:rgba(214,228,247,0.3);}

/* ── FOOTER ── */
footer{background:#060E1A;border-top:0.5px solid rgba(214,228,247,0.07);padding:40px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;}
.footer-logo{font-family:var(--serif);font-size:18px;font-weight:800;}
.footer-logo em{color:var(--steel);font-style:italic;}
.footer-text{font-size:13px;color:rgba(214,228,247,0.25);}

/* ── FLOATING BACK-A-PROJECT BANNER ── */
.back-banner{position:fixed;bottom:24px;right:24px;background:var(--steel);color:var(--white);border-radius:12px;padding:14px 20px;box-shadow:0 8px 32px rgba(0,0,0,0.4);z-index:99;cursor:pointer;transition:all .2s;max-width:260px;}
.back-banner:hover{background:#4A84C5;transform:translateY(-2px);}
.back-banner-label{font-size:11px;font-weight:500;letter-spacing:1px;text-transform:uppercase;opacity:0.7;margin-bottom:4px;}
.back-banner-text{font-size:14px;font-weight:500;}
.back-banner-sub{font-size:12px;opacity:0.7;margin-top:2px;}
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-logo">Men<em>taur</em></div>
  <div class="nav-links">
    <a class="nav-link" href="#problem">The problem</a>
    <a class="nav-link" href="#demo">Platform</a>
    <a class="nav-link" href="#features">Features</a>
    <a class="nav-link" href="#pricing">Pricing</a>
    <button class="nav-cta">Back this project</button>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-bg">
    <div class="hero-grid"></div>
    <div class="hero-glow"></div>
  </div>
  <div class="hero-content">
    <div class="hero-badge">
      <span class="hero-badge-dot"></span>
      Now raising on Kickstarter — join 847 backers
    </div>
    <h1>The mentor you've<br/><em>always needed.</em></h1>
    <p class="hero-sub">Vetted C-suite executives, matched to your specific career moment, in a structured, private, accountable relationship. Not coaching. Not a directory. Mentorship that actually changes what happens next.</p>
    <div class="hero-actions">
      <button class="btn-primary">Back this project →</button>
      <button class="btn-ghost" onclick="document.getElementById('demo').scrollIntoView({behavior:'smooth'})">See the platform</button>
    </div>
    <div class="hero-stats">
      <div class="hero-stat"><div class="n">£38,200</div><div class="l">raised of £50,000 goal</div></div>
      <div class="hero-stat"><div class="n">847</div><div class="l">backers</div></div>
      <div class="hero-stat"><div class="n">14</div><div class="l">days remaining</div></div>
    </div>
  </div>
  <div class="scroll-hint">
    <span>SCROLL</span>
    <div class="scroll-arrow"></div>
  </div>
</section>

<!-- PROBLEM -->
<section id="problem" class="problem-section">
  <div class="problem-inner">
    <div class="section-label">The problem</div>
    <div class="section-h" style="max-width:600px;">63% of professionals have <em>never</em> had a formal mentor.</div>
    <p class="section-sub">The right mentors exist. There is simply no infrastructure to reach them — until now.</p>
    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-num">01</div>
        <h3>Access is gatekept</h3>
        <p>The best mentors are accessible only through elite schools, the right firms, or the right parents. Talent and ambition are not the bottleneck — access is.</p>
      </div>
      <div class="problem-card">
        <div class="problem-num">02</div>
        <h3>Coaching isn't mentoring</h3>
        <p>Certified coaches are trained to ask questions. What ambitious professionals need is someone who has done the thing — raised the round, run the P&L, navigated the board.</p>
      </div>
      <div class="problem-card">
        <div class="problem-num">03</div>
        <h3>Generic platforms don't vet</h3>
        <p>Crowdsourced networks offer variable quality, unverified credentials, and no accountability. A senior professional sharing their fundraising deck deserves better.</p>
      </div>
      <div class="problem-card">
        <div class="problem-num">04</div>
        <h3>The stakes are too high</h3>
        <p>Board conversations, funding asks, pivots — these shape the next decade of your career. Getting them right with guidance is transformative. Getting them wrong is expensive.</p>
      </div>
    </div>
  </div>
</section>

<!-- DEMO -->
<section id="demo" class="demo-section">
  <div class="demo-inner">
    <div class="section-label">The platform</div>
    <div class="section-h" style="max-width:580px;">A private club for your <em>career.</em></div>
    <p class="section-sub" style="margin-bottom:40px;">Explore the Mentaur platform — the same experience our backers will access on launch.</p>

    <div class="demo-tabs">
      <button class="demo-tab active" onclick="showScreen('home',this)">Home feed</button>
      <button class="demo-tab" onclick="showScreen('discover',this)">Discover</button>
      <button class="demo-tab" onclick="showScreen('relationships',this)">Relationships</button>
      <button class="demo-tab" onclick="showScreen('vault',this)">Vault</button>
      <button class="demo-tab" onclick="showScreen('profile',this)">Profile</button>
    </div>

    <div class="browser">
      <div class="browser-bar">
        <div class="browser-dots">
          <div class="browser-dot"></div>
          <div class="browser-dot"></div>
          <div class="browser-dot"></div>
        </div>
        <div class="browser-url">mentaur.co · Secure</div>
      </div>
      <div class="app-nav">
        <div class="app-logo">Men<em>taur</em></div>
        <div class="app-nav-links">
          <span class="app-nav-link" id="nav-home" onclick="showScreen('home',null,true)">Home</span>
          <span class="app-nav-link" id="nav-discover" onclick="showScreen('discover',null,true)">Discover</span>
          <span class="app-nav-link" id="nav-relationships" onclick="showScreen('relationships',null,true)">Relationships</span>
          <span class="app-nav-link" id="nav-vault" onclick="showScreen('vault',null,true)">Vault</span>
          <span class="app-nav-link" id="nav-profile" onclick="showScreen('profile',null,true)">Profile</span>
        </div>
        <div class="app-avatar">JB</div>
      </div>

      <!-- HOME FEED -->
      <div id="screen-home" class="screen active">
        <div class="screen-body">
          <div class="feed-header">
            <div>
              <div class="feed-greeting">Good morning, Jordan</div>
              <div class="feed-title">Your connected feed</div>
            </div>
            <div class="feed-controls">
              <button class="feed-btn on">Connected</button>
              <button class="feed-btn off">Explore</button>
            </div>
          </div>
          <div class="session-reminder">
            <div>
              <div class="session-reminder-text">Next session: Alexandra Chen</div>
              <div class="session-reminder-sub">Thursday 10:00 AM · Intro Call · 30 min</div>
            </div>
            <button class="session-reminder-btn">View details</button>
          </div>
          <div class="post">
            <div class="post-head">
              <div class="av av-1">AC</div>
              <div class="post-meta">
                <div class="post-name">Alexandra Chen <span class="verified">✓ Verified</span></div>
                <div class="post-role">Former CEO, TechVision · Partner at Sequoia · 2h ago</div>
              </div>
              <span class="post-tag tag-insight">Mentor insight</span>
            </div>
            <div class="post-body">"The biggest mistake I see founders make in a Series A process is optimising for <strong>valuation over fit.</strong> The investor you choose will be in your board meetings for 7 years. In that time, the valuation delta becomes irrelevant. The relationship does not."</div>
            <div class="post-actions">
              <span class="post-action">Helpful (12)</span>
              <span class="post-action">Save</span>
              <span class="post-action">Reply privately</span>
            </div>
          </div>
          <div class="post">
            <div class="post-head">
              <div class="av av-2">PR</div>
              <div class="post-meta">
                <div class="post-name">Priya R.</div>
                <div class="post-role">Founder, HealthBridge · mentee · 5h ago</div>
              </div>
              <span class="post-tag tag-milestone">Milestone</span>
            </div>
            <div class="post-body">Closed our seed round today — <strong>£1.2M from three investors.</strong> Six months ago I didn't know how to build a data room. Grateful for every session that got us here.</div>
            <div class="post-actions">
              <span class="post-action">Congratulate (8)</span>
              <span class="post-action">Save</span>
            </div>
          </div>
          <div class="post">
            <div class="post-head">
              <div class="av av-3">MO</div>
              <div class="post-meta">
                <div class="post-name">Marcus Okafor <span class="verified">✓ Verified</span></div>
                <div class="post-role">CFO, Global Ventures · Ex Goldman Sachs · yesterday</div>
              </div>
              <span class="post-tag tag-session">Session insight</span>
            </div>
            <div class="post-body">"In our session today we covered financial modelling for pre-revenue SaaS. Key insight: your <strong>unit economics story matters more than your revenue projection</strong> in early-stage fundraising. Investors know you don't know the revenue. They want to know you understand the model."</div>
            <div class="post-actions">
              <span class="post-action">Helpful (4)</span>
              <span class="post-action">Book a session with Marcus</span>
            </div>
          </div>
        </div>
      </div>

      <!-- DISCOVER -->
      <div id="screen-discover" class="screen">
        <div class="screen-body">
          <div class="search-bar">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input class="search-input" placeholder="Search by expertise, industry, career stage…" />
          </div>
          <div class="filter-row">
            <button class="filter-pill on">All</button>
            <button class="filter-pill">Fundraising</button>
            <button class="filter-pill">Scaling</button>
            <button class="filter-pill">Career pivot</button>
            <button class="filter-pill">FinTech</button>
            <button class="filter-pill">Available now</button>
          </div>
          <div class="mentor-grid">
            <div class="mentor-card m1">
              <div class="mentor-card-head">
                <div class="av-lg av-1">AC</div>
                <div class="mentor-card-info">
                  <div class="mentor-name">Alexandra Chen <span class="verified" style="font-size:9px;">✓</span></div>
                  <div class="mentor-title">Former CEO, TechVision Inc.<br/>Now: Partner @ Sequoia</div>
                </div>
                <div class="mentor-avail"></div>
              </div>
              <div class="mentor-bio">Scaled TechVision from 3 to 400 employees over 7 years. Raised $120M across 4 rounds. Now investing in the next generation of founders.</div>
              <div class="mentor-tags">
                <span class="mentor-tag">Scaling</span>
                <span class="mentor-tag">B2B SaaS</span>
                <span class="mentor-tag">Fundraising</span>
              </div>
              <div class="mentor-meta">
                <div>
                  <span class="mentor-rating">★ 4.97</span>
                  <span class="mentor-sessions" style="margin-left:8px;">142 sessions</span>
                </div>
                <button class="connect-btn">Connect</button>
              </div>
            </div>
            <div class="mentor-card m2">
              <div class="mentor-card-head">
                <div class="av-lg av-2">MO</div>
                <div class="mentor-card-info">
                  <div class="mentor-name">Marcus Okafor <span class="verified" style="font-size:9px;">✓</span></div>
                  <div class="mentor-title">CFO, Global Ventures<br/>Ex: Goldman Sachs VP</div>
                </div>
                <div class="mentor-avail"></div>
              </div>
              <div class="mentor-bio">15 years in finance across investment banking and CFO roles. Guided 3 successful IPOs and 8 acquisitions. Expert in pre-IPO readiness.</div>
              <div class="mentor-tags">
                <span class="mentor-tag">Financial Strategy</span>
                <span class="mentor-tag">IPO Readiness</span>
                <span class="mentor-tag">M&A</span>
              </div>
              <div class="mentor-meta">
                <div>
                  <span class="mentor-rating">★ 4.92</span>
                  <span class="mentor-sessions" style="margin-left:8px;">98 sessions</span>
                </div>
                <button class="connect-btn">Connect</button>
              </div>
            </div>
            <div class="mentor-card m3">
              <div class="mentor-card-head">
                <div class="av-lg" style="background:#5A4A8A;color:#E8E0F8;">PS</div>
                <div class="mentor-card-info">
                  <div class="mentor-name">Priya Sharma <span class="verified" style="font-size:9px;">✓</span></div>
                  <div class="mentor-title">COO, HealthBridge<br/>Ex: McKinsey Principal</div>
                </div>
                <div class="mentor-avail na"></div>
              </div>
              <div class="mentor-bio">Transitioned from consulting to operations leadership. Expert in helping professionals pivot into high-growth industries.</div>
              <div class="mentor-tags">
                <span class="mentor-tag">Operations</span>
                <span class="mentor-tag">Healthcare Tech</span>
                <span class="mentor-tag">Team Building</span>
              </div>
              <div class="mentor-meta">
                <div>
                  <span class="mentor-rating">★ 4.99</span>
                  <span class="mentor-sessions" style="margin-left:8px;">203 sessions</span>
                </div>
                <button class="connect-btn" style="background:rgba(214,228,247,0.1);color:rgba(214,228,247,0.4);">Waitlist</button>
              </div>
            </div>
            <div class="mentor-card m4">
              <div class="mentor-card-head">
                <div class="av-lg" style="background:#6B4030;color:#F0C8A8;">JW</div>
                <div class="mentor-card-info">
                  <div class="mentor-name">James Whitfield <span class="verified" style="font-size:9px;">✓</span></div>
                  <div class="mentor-title">Founder & CEO, NovaPay<br/>Serial Entrepreneur</div>
                </div>
                <div class="mentor-avail"></div>
              </div>
              <div class="mentor-bio">Built and sold two fintech companies. Third venture NovaPay processing $2B annually. Helps founders avoid the mistakes he made.</div>
              <div class="mentor-tags">
                <span class="mentor-tag">FinTech</span>
                <span class="mentor-tag">Go-To-Market</span>
                <span class="mentor-tag">Product</span>
              </div>
              <div class="mentor-meta">
                <div>
                  <span class="mentor-rating">★ 4.88</span>
                  <span class="mentor-sessions" style="margin-left:8px;">87 sessions</span>
                </div>
                <button class="connect-btn">Connect</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RELATIONSHIPS -->
      <div id="screen-relationships" class="screen">
        <div class="screen-body">
          <div style="margin-bottom:20px;">
            <div class="feed-greeting">2 active relationships</div>
            <div class="feed-title">My mentors</div>
          </div>
          <div class="rel-card">
            <div class="rel-head">
              <div class="av-lg av-1">AC</div>
              <div class="rel-info">
                <h3>Alexandra Chen <span class="verified">✓ Verified</span></h3>
                <p>Partner at Sequoia · Connected 3 months ago</p>
              </div>
            </div>
            <div class="session-next">
              <div class="session-next-dot"></div>
              <div>
                <div class="session-next-text">Next session confirmed</div>
                <div class="session-next-time">Thursday · 10:00 AM · Intro Call · 30 min</div>
              </div>
            </div>
            <div class="rel-stats">
              <div class="rel-stat"><div class="n">8</div><div class="l">Sessions</div></div>
              <div class="rel-stat"><div class="n">3</div><div class="l">Goals active</div></div>
              <div class="rel-stat"><div class="n">4</div><div class="l">Vault docs</div></div>
            </div>
            <div class="goal-progress">
              <div class="goal-label"><span>Close Series A fundraise</span><span>65%</span></div>
              <div class="goal-bar"><div class="goal-fill" style="width:65%;"></div></div>
            </div>
            <div class="goal-progress">
              <div class="goal-label"><span>Build leadership team to 8 people</span><span>37%</span></div>
              <div class="goal-bar"><div class="goal-fill" style="width:37%;"></div></div>
            </div>
            <div class="rel-actions">
              <button class="rel-btn primary">View relationship</button>
              <button class="rel-btn ghost">Message</button>
              <button class="rel-btn ghost">Book session</button>
            </div>
          </div>
          <div class="rel-card">
            <div class="rel-head">
              <div class="av-lg av-2">MO</div>
              <div class="rel-info">
                <h3>Marcus Okafor <span class="verified">✓ Verified</span></h3>
                <p>CFO, Global Ventures · Connected 6 weeks ago</p>
              </div>
            </div>
            <div class="rel-stats">
              <div class="rel-stat"><div class="n">3</div><div class="l">Sessions</div></div>
              <div class="rel-stat"><div class="n">1</div><div class="l">Goal active</div></div>
              <div class="rel-stat"><div class="n">1</div><div class="l">Vault doc</div></div>
            </div>
            <div class="goal-progress">
              <div class="goal-label"><span>Financial model for Series A</span><span>50%</span></div>
              <div class="goal-bar"><div class="goal-fill" style="width:50%;"></div></div>
            </div>
            <div class="rel-actions">
              <button class="rel-btn primary">View relationship</button>
              <button class="rel-btn ghost">Message</button>
              <button class="rel-btn ghost">Book session</button>
            </div>
          </div>
        </div>
      </div>

      <!-- VAULT -->
      <div id="screen-vault" class="screen">
        <div class="screen-body">
          <div class="vault-header">
            <div>
              <div class="vault-title">My Vault</div>
              <div style="font-size:13px;color:rgba(214,228,247,0.4);margin-top:3px;">4 documents · all access logged</div>
            </div>
            <button class="vault-upload-btn">+ Upload</button>
          </div>
          <div class="vault-nda">
            <svg class="vault-nda-icon" viewBox="0 0 24 24" fill="none" stroke="#4A7C5F" stroke-width="1.8" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span><strong style="color:#8FD4AA;">Platform NDA active</strong> — mentors can view documents you grant access to. They cannot download or share outside Mentaur.</span>
          </div>
          <div class="doc-item">
            <div class="doc-icon">📄</div>
            <div class="doc-meta">
              <div class="doc-name">Pitch Deck — Seed Round v3.pdf</div>
              <div class="doc-info">4.2 MB · uploaded 3 days ago</div>
            </div>
            <div class="doc-access shared">Alexandra, Marcus</div>
          </div>
          <div class="doc-item">
            <div class="doc-icon">📊</div>
            <div class="doc-meta">
              <div class="doc-name">Financial Model FY2025.xlsx</div>
              <div class="doc-info">890 KB · uploaded 1 week ago</div>
            </div>
            <div class="doc-access shared">Alexandra only</div>
          </div>
          <div class="doc-item">
            <div class="doc-icon">📝</div>
            <div class="doc-meta">
              <div class="doc-name">Board Charter Draft.docx</div>
              <div class="doc-info">210 KB · uploaded 2 weeks ago</div>
            </div>
            <div class="doc-access private">Private — no access granted</div>
          </div>
          <div class="doc-item">
            <div class="doc-icon">📋</div>
            <div class="doc-meta">
              <div class="doc-name">Cap Table — current.pdf</div>
              <div class="doc-info">156 KB · uploaded 1 month ago</div>
            </div>
            <div class="doc-access shared">Alexandra only</div>
          </div>
          <div class="activity-log">
            <strong style="color:rgba(214,228,247,0.6);">Recent access</strong><br/>
            <span>Alexandra Chen</span> viewed Pitch Deck — Seed Round v3.pdf · Today 09:14<br/>
            <span>Marcus Okafor</span> viewed Financial Model FY2025.xlsx · Yesterday 16:42<br/>
            <span>Alexandra Chen</span> viewed Cap Table — current.pdf · 3 days ago
          </div>
        </div>
      </div>

      <!-- PROFILE -->
      <div id="screen-profile" class="screen">
        <div style="background:#0A1628;padding-bottom:24px;">
          <div class="profile-cover">
            <div class="profile-avatar-wrap">
              <div class="profile-avatar">JB</div>
            </div>
          </div>
          <div class="profile-header">
            <div>
              <div class="profile-name">Jordan Blackwell</div>
              <div class="profile-role">Founder · StudioLab · London, UK</div>
            </div>
            <span class="profile-plan">Professional</span>
          </div>
          <div class="profile-stats-row">
            <div class="profile-stat"><div class="n">11</div><div class="l">Sessions</div></div>
            <div class="profile-stat"><div class="n">2</div><div class="l">Mentors</div></div>
            <div class="profile-stat"><div class="n">4</div><div class="l">Documents</div></div>
            <div class="profile-stat"><div class="n">4</div><div class="l">Goals</div></div>
          </div>
          <div class="profile-section">
            <div class="profile-section-label">About</div>
            <div class="profile-bio">Building a creative studio platform for independent artists. Looking for guidance on scaling and our upcoming Series A fundraise. Previously led product at two early-stage startups.</div>
          </div>
          <div class="profile-section">
            <div class="profile-section-label">Mentorship goals</div>
            <span class="goal-chip">Raise funding</span>
            <span class="goal-chip">Scale my business</span>
            <span class="goal-chip">Build a team</span>
            <span class="goal-chip">Board relationships</span>
          </div>
          <div class="profile-section">
            <div class="profile-section-label">Career stage</div>
            <div style="font-size:14px;color:rgba(214,228,247,0.6);">Early Revenue · Technology · Creative / Media</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FEATURES -->
<section id="features" class="features-section">
  <div class="features-inner">
    <div class="section-label">Built differently</div>
    <div class="section-h">Every feature earns<br/>your <em>trust.</em></div>
    <div class="features-grid">
      <div class="feature-block">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div class="feature-h">Vetted, not crowdsourced</div>
        <div class="feature-p">Every mentor is individually reviewed — credentials verified, LinkedIn authenticated, track record assessed. You are matched with someone who has demonstrably done what you are trying to do.</div>
      </div>
      <div class="feature-block">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <div class="feature-h">Document Vault</div>
        <div class="feature-p">Share your fundraising deck, financial model, and cap table with per-mentor access controls. Every view is logged. Access revoked instantly. Platform NDA covers every relationship.</div>
      </div>
      <div class="feature-block">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <div class="feature-h">Matched to your moment</div>
        <div class="feature-p">Mentaur matches on your career moment, not just your job title. A founder preparing for Series A needs different guidance than a VP transitioning to the C-suite. The matching reflects that.</div>
      </div>
      <div class="feature-block">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        </div>
        <div class="feature-h">Structured accountability</div>
        <div class="feature-p">Goals are set. Progress is tracked. Sessions are booked and confirmed. Mutual simultaneous ratings after every session. Mentors who don't show up don't stay on the platform.</div>
      </div>
      <div class="feature-block">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <div class="feature-h">Private club feed</div>
        <div class="feature-p">Your feed shows only people you are connected with. Mentor insights, mentee milestones, session reflections — curated, relevant, never noisy. Explore the wider network when you choose to.</div>
      </div>
      <div class="feature-block">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div class="feature-h">Free Explorer tier</div>
        <div class="feature-p">A genuinely useful experience at no cost — browse mentor profiles, read insights, follow up to 5 mentors. Supported by professional advertising, not a crippled preview of the paid product.</div>
      </div>
    </div>
  </div>
</section>

<!-- SOCIAL PROOF -->
<section class="proof-section">
  <div class="proof-inner">
    <div class="section-label">Early members</div>
    <div class="section-h" style="max-width:500px;">What our beta<br/>members say.</div>
    <div class="proof-grid">
      <div class="proof-card">
        <div class="proof-quote">"I spent six months trying to get five minutes with a seasoned CFO. Within two weeks on Mentaur I had a monthly session with someone who'd taken two companies through IPO. That relationship changed how I think about our cap table."</div>
        <div class="proof-author">
          <div class="proof-av av-1">SR</div>
          <div>
            <div class="proof-name">S. Rahman</div>
            <div class="proof-role">Series A founder · FinTech · London</div>
          </div>
        </div>
      </div>
      <div class="proof-card">
        <div class="proof-quote">"The Document Vault was what made me trust the platform. Sharing a fundraising deck via email always felt wrong. Having it behind access controls I manage — that's what made me comfortable being genuinely open with my mentor."</div>
        <div class="proof-author">
          <div class="proof-av av-2">KM</div>
          <div>
            <div class="proof-name">K. Mensah</div>
            <div class="proof-role">Founding CEO · Climate Tech · Edinburgh</div>
          </div>
        </div>
      </div>
      <div class="proof-card">
        <div class="proof-quote">"I've mentored informally for years. Mentaur gave me structure I didn't know I was missing — a clear profile, proper scheduling, and mentees who arrive prepared because the platform makes them prepare."</div>
        <div class="proof-author">
          <div class="proof-av av-3">LT</div>
          <div>
            <div class="proof-name">L. Thompson</div>
            <div class="proof-role">Former CPO, FTSE 250 · Mentor since beta</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TIERS -->
<section id="pricing" class="tiers-section">
  <div class="tiers-inner">
    <div class="section-label">Pricing</div>
    <div class="section-h">The right plan for<br/>where you are <em>now.</em></div>
    <div class="tiers-grid">
      <div class="tier-card">
        <div class="tier-name-label">Free</div>
        <div class="tier-name">Explorer</div>
        <div class="tier-price">£0</div>
        <div class="tier-period">Ad-supported · always free</div>
        <div class="tier-divider"></div>
        <div class="tier-feat">Browse all verified mentor profiles</div>
        <div class="tier-feat">Read mentor insights in the feed</div>
        <div class="tier-feat">Follow up to 5 mentors</div>
        <div class="tier-feat">Post in the Explore feed</div>
        <div class="tier-feat no">No direct messaging</div>
        <div class="tier-feat no">No session booking</div>
        <div class="tier-feat no">No Document Vault</div>
        <button class="tier-cta outline">Join free</button>
      </div>
      <div class="tier-card">
        <div class="tier-name-label">Entry</div>
        <div class="tier-name">Associate</div>
        <div class="tier-price">£49</div>
        <div class="tier-period">per month · no ads</div>
        <div class="tier-divider"></div>
        <div class="tier-feat">1 active mentor relationship</div>
        <div class="tier-feat">2 sessions per month</div>
        <div class="tier-feat">Direct messaging</div>
        <div class="tier-feat">Document Vault (3 docs)</div>
        <div class="tier-feat">Goal tracking (1 goal)</div>
        <div class="tier-feat">Session notes</div>
        <button class="tier-cta outline">Back at this tier</button>
      </div>
      <div class="tier-card featured">
        <div class="tier-popular">Most popular</div>
        <div class="tier-name-label">Core</div>
        <div class="tier-name">Professional</div>
        <div class="tier-price">£89</div>
        <div class="tier-period">per month · save 15% annually</div>
        <div class="tier-divider"></div>
        <div class="tier-feat">2 concurrent mentor relationships</div>
        <div class="tier-feat">4 sessions per month</div>
        <div class="tier-feat">48hr priority matching</div>
        <div class="tier-feat">Unlimited Document Vault</div>
        <div class="tier-feat">Unlimited goal tracking</div>
        <div class="tier-feat">Relationship timeline</div>
        <div class="tier-feat">Milestone feed posts</div>
        <button class="tier-cta solid">Back at this tier</button>
      </div>
      <div class="tier-card">
        <div class="tier-name-label">Premium</div>
        <div class="tier-name">Executive</div>
        <div class="tier-price">£189</div>
        <div class="tier-period">per month · save 15% annually</div>
        <div class="tier-divider"></div>
        <div class="tier-feat">4 concurrent mentor relationships</div>
        <div class="tier-feat">8 sessions per month</div>
        <div class="tier-feat">Concierge matching</div>
        <div class="tier-feat">Quarterly strategy review</div>
        <div class="tier-feat">Early mentor access</div>
        <div class="tier-feat">Founder events invitation</div>
        <div class="tier-feat">Outcome tracking (beta)</div>
        <button class="tier-cta outline">Back at this tier</button>
      </div>
    </div>
    <div style="text-align:center;margin-top:32px;font-size:14px;color:rgba(214,228,247,0.35);">30-day money-back guarantee on all paid plans · Cancel any time · No long-term commitment</div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section">
  <div class="cta-glow"></div>
  <div class="cta-inner">
    <div class="section-label" style="text-align:center;">Join the campaign</div>
    <div class="cta-h">Be part of making<br/>mentorship <em>accessible.</em></div>
    <div class="cta-sub">£38,200 raised. 847 backers. 14 days left. Every backer gets founding member status — a permanent badge, priority matching, and a seat at the table when we launch.</div>
    <div class="cta-actions">
      <button class="btn-primary" style="font-size:16px;padding:16px 36px;">Back this project on Kickstarter →</button>
    </div>
    <div class="cta-note">Flexible funding · You will only be charged if we reach our goal · 30-day delivery commitment</div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">Men<em>taur</em></div>
  <div class="footer-text">© 2025 Mentaur · Executive mentorship, made accessible · United Kingdom</div>
</footer>

<!-- FLOATING BACK BANNER -->
<div class="back-banner">
  <div class="back-banner-label">Live on Kickstarter</div>
  <div class="back-banner-text">Back Mentaur today</div>
  <div class="back-banner-sub">£38,200 raised · 14 days left</div>
</div>

<script>
function showScreen(name, tabBtn, fromNav) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');

  document.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.app-nav-link').forEach(l => l.classList.remove('on'));

  const tabMap = {home:0,discover:1,relationships:2,vault:3,profile:4};
  const tabs = document.querySelectorAll('.demo-tab');
  if (tabs[tabMap[name]]) tabs[tabMap[name]].classList.add('active');
  const navLink = document.getElementById('nav-' + name);
  if (navLink) navLink.classList.add('on');
}

showScreen('home');

// Animate goal bars on relationships tab
document.querySelector('.demo-tab:nth-child(3)').addEventListener('click', () => {
  setTimeout(() => {
    document.querySelectorAll('.goal-fill').forEach(bar => {
      const w = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => { bar.style.width = w; }, 50);
    });
  }, 100);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Filter pills toggle
document.querySelectorAll('.filter-pill').forEach(p => {
  p.addEventListener('click', () => {
    document.querySelectorAll('.filter-pill').forEach(x => x.classList.remove('on'));
    p.classList.add('on');
  });
});
</script>
</body>
</html>
