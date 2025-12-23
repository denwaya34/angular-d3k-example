import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="hero min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div class="hero-content flex-col lg:flex-row-reverse gap-12 py-16 px-4 max-w-7xl mx-auto relative z-10">
        <div class="lg:w-1/2 relative animate-slide-in-right">
          <div
            class="w-full aspect-square max-w-lg mx-auto rounded-full bg-gradient-to-br from-amber-200 to-orange-300 shadow-2xl flex items-center justify-center overflow-hidden gpu-accelerated animate-pulse-soft"
            role="img"
            aria-label="和風チャーハンのイメージ"
          >
            <div class="text-center p-8">
              <span class="text-8xl animate-bounce-subtle">🍳</span>
              <p class="text-amber-800 font-bold mt-4 text-xl">香ばしい香り</p>
            </div>
          </div>
          <div
            class="absolute -top-4 -right-4 bg-red-600 text-white rounded-full w-24 h-24 flex items-center justify-center rotate-12 shadow-lg hover-scale"
            role="img"
            aria-label="期間限定特別価格"
          >
            <span class="text-center text-sm font-bold">期間限定<br />特別価格</span>
          </div>
        </div>

        <div class="lg:w-1/2 text-center lg:text-left animate-slide-in-left">
          <p class="text-amber-700 font-medium mb-2 tracking-widest animate-fade-in-up" style="animation-delay: 0.1s;">
            〜 職人が丹精込めて作る 〜
          </p>
          <h1
            id="hero-heading"
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight animate-fade-in-up"
            style="animation-delay: 0.2s;"
          >
            本格<span class="text-orange-600">和風</span>チャーハン
          </h1>
          <p class="py-6 text-lg text-amber-800 leading-relaxed animate-fade-in-up" style="animation-delay: 0.3s;">
            厳選された国産米と新鮮な具材を使用し、<br class="hidden sm:inline" />
            熟練の職人が一つ一つ丁寧に仕上げた逸品。<br class="hidden sm:inline" />
            醤油の香ばしさと出汁の旨みが織りなす<br class="hidden sm:inline" />
            <strong>究極の和風チャーハン</strong>をご家庭で。
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style="animation-delay: 0.4s;">
            <a
              href="#order"
              class="btn btn-lg bg-orange-600 hover:bg-orange-700 text-white border-none shadow-lg btn-ripple hover-scale transition-smooth"
              aria-label="今すぐ注文する（注文セクションへ移動）"
            >
              今すぐ注文する
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#features"
              class="btn btn-lg btn-outline border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white hover:border-amber-700 btn-ripple hover-scale transition-smooth"
              aria-label="詳しく見る（特徴セクションへ移動）"
            >
              詳しく見る
            </a>
          </div>

          <ul class="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-amber-700 animate-fade-in-up" style="animation-delay: 0.5s;" role="list" aria-label="主な特徴">
            <li class="flex items-center gap-2 transition-smooth hover-scale">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-green-600 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>送料無料</span>
            </li>
            <li class="flex items-center gap-2 transition-smooth hover-scale">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-green-600 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>冷凍便でお届け</span>
            </li>
            <li class="flex items-center gap-2 transition-smooth hover-scale">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-green-600 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>化学調味料不使用</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- スクロールインジケーター -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-amber-700 animate-scroll-indicator" aria-hidden="true">
        <span class="text-sm font-medium">スクロール</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  `,
})
export class HeroComponent {}
