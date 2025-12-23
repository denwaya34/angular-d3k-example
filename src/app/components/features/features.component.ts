import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="features"
      class="py-20 bg-white"
      aria-labelledby="features-heading"
    >
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <p class="text-amber-600 font-medium tracking-widest mb-2">FEATURES</p>
          <h2
            id="features-heading"
            class="text-3xl md:text-4xl font-bold text-gray-900"
          >
            選ばれる<span class="text-orange-600">3つの理由</span>
          </h2>
          <div class="w-24 h-1 bg-orange-500 mx-auto mt-4 transition-all duration-500 hover:w-32" aria-hidden="true"></div>
        </div>

        <ul class="grid md:grid-cols-3 gap-8" role="list">
          @for (feature of features(); track feature.title; let i = $index) {
            <li
              class="card bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg card-hover gpu-accelerated animate-fade-in-up"
              [style.animation-delay]="(i * 0.1 + 0.2) + 's'"
            >
              <div class="card-body items-center text-center">
                <div
                  class="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center mb-4 hover-scale transition-smooth"
                  aria-hidden="true"
                >
                  <span class="text-4xl">{{ feature.icon }}</span>
                </div>
                <h3 class="card-title text-xl text-amber-900 transition-colors hover:text-orange-600">{{ feature.title }}</h3>
                <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class FeaturesComponent {
  protected readonly features = signal<Feature[]>([
    {
      icon: '🌾',
      title: '厳選された国産米',
      description:
        '新潟県産コシヒカリを100%使用。粒立ちが良く、パラパラに仕上がる最高品質のお米だけを厳選しています。',
    },
    {
      icon: '👨‍🍳',
      title: '職人の熟練技',
      description:
        '創業40年の老舗中華料理店で修行を積んだ職人が、一食一食丁寧に調理。火加減と手さばきが生み出す絶妙な食感をお届けします。',
    },
    {
      icon: '🍶',
      title: '秘伝の和風だれ',
      description:
        '厳選した本醸造醤油と鰹節・昆布から取った一番出汁をブレンド。化学調味料を一切使わない、自然な旨みが特徴です。',
    },
  ]);
}
