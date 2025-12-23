import { ChangeDetectionStrategy, Component, signal, computed, effect } from '@angular/core';

interface Ingredient {
  name: string;
  origin: string;
  icon: string;
}

interface Stat {
  value: string;
  label: string;
  animated: boolean;
}

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="about"
      class="py-20 bg-gradient-to-b from-amber-100 to-orange-50"
      aria-labelledby="about-heading"
    >
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <p class="text-amber-600 font-medium tracking-widest mb-2">INGREDIENTS</p>
          <h2
            id="about-heading"
            class="text-3xl md:text-4xl font-bold text-gray-900"
          >
            素材への<span class="text-orange-600">こだわり</span>
          </h2>
          <div class="w-24 h-1 bg-orange-500 mx-auto mt-4 transition-all duration-500 hover:w-32" aria-hidden="true"></div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="animate-slide-in-left">
            <div
              class="aspect-video bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl shadow-xl flex items-center justify-center hover-scale transition-smooth gpu-accelerated"
              role="img"
              aria-label="厳選された素材のイメージ"
            >
              <div class="text-center">
                <span class="text-7xl animate-bounce-subtle">🥢</span>
                <p class="text-amber-800 font-bold mt-4">厳選素材</p>
              </div>
            </div>
          </div>

          <div class="animate-slide-in-right">
            <h3 class="text-2xl font-bold text-amber-900 mb-6">
              全ての素材は国産にこだわっています
            </h3>
            <p class="text-gray-700 leading-relaxed mb-8">
              私たちの和風チャーハンに使用する素材は、全て国内の信頼できる生産者から直接仕入れています。
              鮮度と品質にこだわり、お客様に安心してお召し上がりいただける商品をお届けします。
            </p>

            <ul class="space-y-4" role="list" aria-label="使用している素材一覧">
              @for (ingredient of ingredients(); track ingredient.name; let i = $index) {
                <li
                  class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover-scale transition-smooth animate-fade-in-up"
                  [style.animation-delay]="(i * 0.1 + 0.2) + 's'"
                >
                  <span class="text-3xl" aria-hidden="true">{{ ingredient.icon }}</span>
                  <div>
                    <p class="font-bold text-amber-900">{{ ingredient.name }}</p>
                    <p class="text-sm text-gray-600">{{ ingredient.origin }}</p>
                  </div>
                </li>
              }
            </ul>
          </div>
        </div>

        <ul class="mt-16 grid md:grid-cols-4 gap-6 text-center" role="list" aria-label="統計情報">
          @for (stat of stats(); track stat.label; let i = $index) {
            <li
              class="p-6 bg-white rounded-xl shadow-md card-hover gpu-accelerated animate-fade-in-up"
              [style.animation-delay]="(i * 0.1 + 0.5) + 's'"
            >
              <p class="text-4xl font-bold text-orange-600 animate-count-up" [style.animation-delay]="(i * 0.1 + 0.7) + 's'">{{ stat.value }}</p>
              <p class="text-gray-600 mt-2">{{ stat.label }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class AboutComponent {
  protected readonly ingredients = signal<Ingredient[]>([
    { name: 'コシヒカリ', origin: '新潟県魚沼産', icon: '🌾' },
    { name: '平飼い卵', origin: '千葉県産', icon: '🥚' },
    { name: '九条ねぎ', origin: '京都府産', icon: '🧅' },
    { name: '黒豚チャーシュー', origin: '鹿児島県産', icon: '🥓' },
  ]);

  protected readonly stats = signal<Stat[]>([
    { value: '100%', label: '国産素材使用', animated: true },
    { value: '0', label: '化学調味料', animated: true },
    { value: '40年', label: '受け継がれる技術', animated: true },
    { value: '50万食', label: '累計販売数', animated: true },
  ]);
}
