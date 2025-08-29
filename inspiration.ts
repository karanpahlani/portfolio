!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Karan Pahlani — Software Engineer</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#12100F;        /* near‑black */
      --card:#FFFFFF;      /* white */
      --muted:#9CA3AF;     /* gray‑400 */
      --accent:#FF6A3D;    /* orange */
      --acid:#C9FF00;      /* neon green */
    }
    html,body{font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';}
    .shadow-soft{ box-shadow: 0 10px 30px rgba(0,0,0,.25); }
    .text-outline{ text-shadow: 0 1px 0 rgba(0,0,0,.25); }
    /* big display sizes */
    .display-1{ font-size: clamp(2.25rem, 5vw + 1rem, 6rem); line-height: 0.95; }
    .display-2{ font-size: clamp(2rem, 4.5vw + 1rem, 5rem); line-height: 0.95; }
    /* dotted curve helper */
    .curve{ stroke-dasharray: 4 8; }
  </style>
</head>
<body class="bg-[var(--bg)] text-white antialiased">
  <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
    <!-- Top section: Profile card + Headline + Stats + Feature cards -->
    <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      <!-- Profile Card -->
      <aside class="lg:col-span-4">
        <div class="bg-[var(--card)] text-zinc-900 rounded-3xl p-6 shadow-soft relative overflow-hidden">
          <!-- dotted curve decoration -->
          <svg class="absolute -left-4 top-8 w-40 h-40 rotate-12" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="curve" d="M10 150 C70 20, 130 20, 190 150" stroke="#FF6A3D" stroke-width="4" stroke-linecap="round"/>
          </svg>
          <div class="rounded-2xl overflow-hidden mb-5">
            <div class="aspect-[4/3] grid place-items-center bg-gradient-to-br from-[#FF5C00] via-[#FF6A3D] to-[#B32600]">
              <!-- portrait placeholder -->
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop" alt="Portrait" class="h-full w-full object-cover mix-blend-luminosity opacity-90"/>
            </div>
          </div>
          <h2 class="text-2xl font-extrabold">Karan Pahlani</h2>
          <div class="mt-2 inline-flex items-center gap-2">
            <span class="inline-grid place-items-center h-6 w-6 rounded-full bg-orange-100 text-orange-600">🔥</span>
            <span class="text-sm text-zinc-600">Software Engineer</span>
          </div>
          <p class="mt-4 text-sm text-zinc-600 leading-relaxed">
            Passionate about building reliable, fast backends. I turn complex systems into delightful experiences.
          </p>
          <!-- Socials -->
          <div class="mt-6 flex items-center gap-4 text-zinc-700">
            <a href="#" class="hover:text-zinc-900" aria-label="Dribbble">
              <!-- Dribbble icon -->
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm6.938 7.5h-3.96a27.82 27.82 0 0 0-1.52-3.414A8.03 8.03 0 0 1 18.938 9.5ZM12 3.999c1.7 0 3.267.568 4.523 1.523a29.717 29.717 0 0 1 1.712 3.763H12c-.336 0-.664.02-.983.058A29.42 29.42 0 0 0 9.22 4.588 8.006 8.006 0 0 1 12 3.999ZM7.99 5.545a27.797 27.797 0 0 1 1.67 3.51 8.048 8.048 0 0 0-4.89 3.211A7.966 7.966 0 0 1 7.99 5.545Zm-3.99 6.454c0-.142.004-.284.014-.424a10.04 10.04 0 0 1 5.77-3.79c.276.58.524 1.17.742 1.764.113.31.22.622.319.933-2.327.7-4.37 2.232-5.845 4.374A7.948 7.948 0 0 1 4 11.999Zm1.062 3.5A8.02 8.02 0 0 1 8.99 12.77c.59-.257 1.22-.45 1.882-.573.37 1.129.647 2.34.821 3.6.094.676.155 1.37.183 2.069A8.005 8.005 0 0 1 5.062 15.5Zm7.424 5.483a29.842 29.842 0 0 0-.198-2.26c-.162-1.156-.418-2.268-.76-3.313.57-.053 1.166-.061 1.782-.022 1.382.087 2.858.35 4.406.783A8.01 8.01 0 0 1 12.486 20.983ZM19.4 18.11c-1.7-.485-3.294-.758-4.758-.851-.725-.046-1.417-.031-2.07.046a18.824 18.824 0 0 0-.793-2.19c1.382-.137 2.923-.056 4.605.24a21.71 21.71 0 0 1 3.944 1.131A8.01 8.01 0 0 1 19.4 18.11ZM20 12c0 .907-.155 1.779-.44 2.59a23.74 23.74 0 0 0-4.762-1.032 13.186 13.186 0 0 0-2.716.014 16.7 16.7 0 0 0-.553-1.617c-.058-.153-.119-.306-.181-.459.3-.038.61-.059.931-.059h6.832A7.97 7.97 0 0 1 20 12Z"/></svg>
            </a>
            <a href="#" class="hover:text-zinc-900" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92a8.2 8.2 0 0 1-2.357.646 4.11 4.11 0 0 0 1.804-2.267 8.223 8.223 0 0 1-2.606.996A4.097 4.097 0 0 0 11.2 8.034a11.632 11.632 0 0 1-8.445-4.282 4.097 4.097 0 0 0 1.267 5.466 4.08 4.08 0 0 1-1.856-.513v.052a4.097 4.097 0 0 0 3.287 4.016 4.107 4.107 0 0 1-1.85.07 4.099 4.099 0 0 0 3.826 2.843A8.218 8.218 0 0 1 2 17.542a11.6 11.6 0 0 0 6.29 1.844c7.547 0 11.675-6.254 11.675-11.675 0-.177-.004-.353-.012-.528A8.34 8.34 0 0 0 22 5.92Z"/></svg>
            </a>
            <a href="#" class="hover:text-zinc-900" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Zm5.25-.95a.95.95 0 1 1-1.9 0 .95.95 0 0 1 1.9 0Z"/></svg>
            </a>
            <a href="#" class="hover:text-zinc-900" aria-label="Mail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.217l8 5.333 8-5.333V6H4Zm16 12V9.15l-7.2 4.8a2 2 0 0 1-2.3 0L4 9.15V18h16Z"/></svg>
            </a>
          </div>
        </div>
      </aside>

      <!-- Headline + Stats + Feature Cards -->
      <div class="lg:col-span-8">
        <!-- Headline -->
        <div class="pt-1">
          <div class="display-1 font-extrabold tracking-tight">SOFTWARE</div>
          <div class="display-2 font-extrabold tracking-tight text-white/20">ENGINEER</div>
          <p class="mt-5 max-w-2xl text-sm md:text-base text-white/70">
            Passionate about creating intuitive and engaging experiences. I specialize in transforming ideas into
            reliable, beautifully crafted products.
          </p>
        </div>

        <!-- Stats -->
        <div class="mt-8 grid grid-cols-3 gap-4 md:gap-6">
          <div class="rounded-2xl p-4 md:p-6 border border-white/10 bg-white/5">
            <div class="text-3xl md:text-4xl font-extrabold">+12</div>
            <div class="mt-1 text-xs md:text-sm text-white/60">YEARS OF<br/>EXPERIENCE</div>
          </div>
          <div class="rounded-2xl p-4 md:p-6 border border-white/10 bg-white/5">
            <div class="text-3xl md:text-4xl font-extrabold">+46</div>
            <div class="mt-1 text-xs md:text-sm text-white/60">PROJECTS<br/>COMPLETED</div>
          </div>
          <div class="rounded-2xl p-4 md:p-6 border border-white/10 bg-white/5">
            <div class="text-3xl md:text-4xl font-extrabold">+20</div>
            <div class="mt-1 text-xs md:text-sm text-white/60">WORLDWIDE<br/>CLIENTS</div>
          </div>
        </div>

        <!-- Feature cards -->
        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <!-- Orange card -->
          <a href="#" class="group relative rounded-3xl p-6 md:p-7 bg-[var(--accent)] text-zinc-900 overflow-hidden border border-white/10">
            <!-- subtle topography squiggle -->
            <svg class="absolute right-0 top-0 opacity-40" width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 90 C50 30, 150 150, 200 70" stroke="#000" stroke-opacity=".15" stroke-width="16" fill="none"/>
              <path d="M0 60 C60 10, 140 130, 200 40" stroke="#000" stroke-opacity=".12" stroke-width="16" fill="none"/>
            </svg>
            <div class="flex items-center justify-between gap-4">
              <div class="grid place-items-center h-10 w-10 rounded-xl bg-zinc-900/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-zinc-900/80"><path d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 4v13l10 5 10-5V4l-10 5Z"/></svg>
              </div>
              <div class="ml-auto h-9 w-9 grid place-items-center rounded-xl border border-zinc-900/20 group-hover:bg-zinc-900/10 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 5h6v6h-2V8.41l-8.3 8.3-1.4-1.42 8.3-8.3H13V5Z"/></svg>
              </div>
            </div>
            <div class="mt-10 font-semibold leading-tight text-lg md:text-xl">DYNAMIC ANIMATION,<br/>MOTION DESIGN</div>
          </a>

          <!-- Acid green card -->
          <a href="#" class="group relative rounded-3xl p-6 md:p-7 bg-[var(--acid)] text-zinc-900 overflow-hidden border border-white/10">
            <svg class="absolute -right-10 -top-6 opacity-40" width="260" height="160" viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 30 L50 60 L100 20 L150 70 L200 30 L250 80" stroke="#000" stroke-opacity=".12" stroke-width="18" fill="none"/>
            </svg>
            <div class="flex items-center justify-between gap-4">
              <div class="grid place-items-center h-10 w-10 rounded-xl bg-zinc-900/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-zinc-900/80"><path d="M4 4h7v7H4V4Zm0 9h7v7H4v-7Zm9-9h7v7h-7V4Zm0 9h7v7h-7v-7Z"/></svg>
              </div>
              <div class="ml-auto h-9 w-9 grid place-items-center rounded-xl border border-zinc-900/20 group-hover:bg-zinc-900/10 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 5h6v6h-2V8.41l-8.3 8.3-1.4-1.42 8.3-8.3H13V5Z"/></svg>
              </div>
            </div>
            <div class="mt-10 font-semibold leading-tight text-lg md:text-xl">FRAMER, FIGMA,<br/>WORDPRESS, REACTJS</div>
          </a>
        </div>
      </div>
    </section>