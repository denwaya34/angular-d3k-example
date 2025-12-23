import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Plan {
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  quantity: string;
  features: string[];
  recommended: boolean;
}

@Component({
  selector: 'app-cta',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="order"
      class="py-20 bg-gradient-to-b from-orange-50 to-amber-100"
      aria-labelledby="order-heading"
    >
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <p class="text-amber-600 font-medium tracking-widest mb-2">ORDER</p>
          <h2
            id="order-heading"
            class="text-3xl md:text-4xl font-bold text-gray-900"
          >
            ご注文は<span class="text-orange-600">こちら</span>
          </h2>
          <div class="w-24 h-1 bg-orange-500 mx-auto mt-4 transition-all duration-500 hover:w-32" aria-hidden="true"></div>
          <p class="mt-6 text-gray-600">
            期間限定の特別価格でお届けします
          </p>
        </div>

        <ul class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" role="list">
          @for (plan of plans(); track plan.name; let i = $index) {
            <li
              class="card shadow-xl relative transition-smooth gpu-accelerated animate-fade-in-up"
              [class]="plan.recommended
                ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white scale-105 z-10 card-hover'
                : 'bg-white card-hover'"
              [style.animation-delay]="(i * 0.15 + 0.2) + 's'"
            >
              @if (plan.recommended) {
                <div
                  class="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse-soft"
                  role="img"
                  aria-label="一番人気のプラン"
                >
                  一番人気
                </div>
              }
              <div class="card-body">
                <h3
                  class="card-title justify-center text-2xl transition-colors"
                  [class]="plan.recommended ? 'text-white' : 'text-amber-900'"
                >
                  {{ plan.name }}
                </h3>
                <p
                  class="text-center text-sm"
                  [class]="plan.recommended ? 'text-orange-100' : 'text-gray-600'"
                >
                  {{ plan.description }}
                </p>

                <div class="text-center my-6">
                  <p
                    class="text-sm line-through transition-opacity"
                    [class]="plan.recommended ? 'text-orange-200' : 'text-gray-400'"
                  >
                    通常価格 ¥{{ plan.originalPrice.toLocaleString() }}
                  </p>
                  <p
                    class="text-4xl font-bold transition-transform hover-scale"
                    [class]="plan.recommended ? 'text-white' : 'text-orange-600'"
                  >
                    ¥{{ plan.price.toLocaleString() }}
                    <span class="text-lg font-normal">（税込）</span>
                  </p>
                  <p
                    class="text-sm mt-1"
                    [class]="plan.recommended ? 'text-orange-100' : 'text-gray-600'"
                  >
                    {{ plan.quantity }}
                  </p>
                </div>

                <ul
                  class="space-y-2 mb-6"
                  role="list"
                  [attr.aria-label]="plan.name + 'の特典'"
                >
                  @for (feature of plan.features; track feature; let featureIndex = $index) {
                    <li
                      class="flex items-center gap-2 animate-fade-in-up"
                      [style.animation-delay]="(i * 0.15 + featureIndex * 0.05 + 0.3) + 's'"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 flex-shrink-0 transition-transform hover:scale-125"
                        [class]="plan.recommended ? 'text-white' : 'text-green-600'"
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
                      <span
                        class="text-sm"
                        [class]="plan.recommended ? 'text-white' : 'text-gray-700'"
                      >
                        {{ feature }}
                      </span>
                    </li>
                  }
                </ul>

                <div class="card-actions justify-center">
                  <button
                    type="button"
                    class="btn btn-lg w-full btn-ripple hover-scale transition-smooth"
                    [class]="plan.recommended
                      ? 'bg-white text-orange-600 hover:bg-orange-50 border-none'
                      : 'bg-orange-600 text-white hover:bg-orange-700 border-none'"
                    [attr.aria-label]="plan.name + 'を注文する'"
                  >
                    このプランを注文
                  </button>
                </div>
              </div>
            </li>
          }
        </ul>

        <ul class="mt-12 inline-flex flex-wrap gap-6 justify-center text-gray-600 animate-fade-in-up w-full" style="animation-delay: 0.6s;" role="list" aria-label="お支払い・配送情報">
          <li class="flex items-center gap-2 hover-scale transition-smooth">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-green-600 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>安心の品質保証</span>
          </li>
          <li class="flex items-center gap-2 hover-scale transition-smooth">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-green-600 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <span>各種クレジットカード対応</span>
          </li>
          <li class="flex items-center gap-2 hover-scale transition-smooth">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-green-600 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <span>全国送料無料</span>
          </li>
        </ul>
      </div>
    </section>
  `,
})
export class CtaComponent {
  protected readonly plans = signal<Plan[]>([
    {
      name: 'お試しセット',
      description: '初めての方におすすめ',
      price: 1980,
      originalPrice: 2500,
      quantity: '250g × 3食入り',
      features: ['送料無料', '冷凍便でお届け', '賞味期限3ヶ月'],
      recommended: false,
    },
    {
      name: '定番セット',
      description: 'ご家族でお楽しみください',
      price: 4980,
      originalPrice: 7000,
      quantity: '250g × 8食入り',
      features: [
        '送料無料',
        '冷凍便でお届け',
        '賞味期限3ヶ月',
        '特製ラー油付き',
        '次回使える500円クーポン',
      ],
      recommended: true,
    },
    {
      name: '大容量セット',
      description: 'まとめ買いでお得に',
      price: 8980,
      originalPrice: 12000,
      quantity: '250g × 15食入り',
      features: [
        '送料無料',
        '冷凍便でお届け',
        '賞味期限3ヶ月',
        '特製ラー油付き',
        '次回使える1000円クーポン',
      ],
      recommended: false,
    },
  ]);
}
