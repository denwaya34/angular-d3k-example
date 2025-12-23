import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Testimonial {
  name: string;
  age: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

@Component({
  selector: 'app-testimonials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="testimonials"
      class="py-20 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <p class="text-amber-600 font-medium tracking-widest mb-2">REVIEWS</p>
          <h2
            id="testimonials-heading"
            class="text-3xl md:text-4xl font-bold text-gray-900"
          >
            お客様の<span class="text-orange-600">声</span>
          </h2>
          <div class="w-24 h-1 bg-orange-500 mx-auto mt-4 transition-all duration-500 hover:w-32" aria-hidden="true"></div>
          <p class="mt-6 text-gray-600">
            多くのお客様からご好評いただいております
          </p>
        </div>

        <ul class="grid md:grid-cols-3 gap-8" role="list" aria-label="お客様レビュー一覧">
          @for (testimonial of testimonials(); track testimonial.name; let i = $index) {
            <li
              class="card bg-gradient-to-br from-amber-50 to-white shadow-lg border border-amber-100 card-tilt gpu-accelerated animate-fade-in-up"
              [style.animation-delay]="(i * 0.15 + 0.2) + 's'"
            >
              <div class="card-body">
                <div class="flex items-center gap-4 mb-4">
                  <div
                    class="w-14 h-14 rounded-full bg-gradient-to-br from-orange-300 to-amber-400 flex items-center justify-center text-2xl hover-scale transition-smooth"
                    aria-hidden="true"
                  >
                    {{ testimonial.avatar }}
                  </div>
                  <div>
                    <p class="font-bold text-gray-900">{{ testimonial.name }}</p>
                    <p class="text-sm text-gray-500">
                      {{ testimonial.age }} / {{ testimonial.location }}
                    </p>
                  </div>
                </div>

                <div
                  class="flex gap-1 mb-3"
                  role="img"
                  [attr.aria-label]="'評価: ' + testimonial.rating + '点（5点満点）'"
                >
                  @for (star of getStars(testimonial.rating); track $index; let starIndex = $index) {
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-yellow-500 transition-transform hover:scale-125 animate-fade-in-up"
                      [style.animation-delay]="(i * 0.15 + starIndex * 0.05 + 0.3) + 's'"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  }
                </div>

                <p class="text-gray-700 leading-relaxed">
                  「{{ testimonial.comment }}」
                </p>
              </div>
            </li>
          }
        </ul>

        <div class="mt-12 text-center animate-fade-in-up" style="animation-delay: 0.6s;">
          <div class="inline-flex items-center gap-4 p-6 bg-amber-50 rounded-2xl hover-scale transition-smooth shadow-md hover:shadow-lg">
            <div class="text-center">
              <p class="text-4xl font-bold text-orange-600 animate-count-up" style="animation-delay: 0.8s;">4.8</p>
              <div class="flex gap-1 justify-center mt-1" aria-hidden="true">
                @for (star of getStars(5); track $index) {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-yellow-500 transition-transform hover:scale-125"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                }
              </div>
            </div>
            <div class="h-12 w-px bg-amber-300" aria-hidden="true"></div>
            <div class="text-left">
              <p class="font-bold text-gray-900">平均評価 4.8点</p>
              <p class="text-sm text-gray-600">1,234件のレビューより</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent {
  protected readonly testimonials = signal<Testimonial[]>([
    {
      name: '田中 美咲',
      age: '30代女性',
      location: '東京都',
      rating: 5,
      avatar: '👩',
      comment:
        '冷凍とは思えないほど本格的な味わい！忙しい日のランチにぴったりです。子供たちも大喜びで食べています。',
    },
    {
      name: '山田 健太',
      age: '40代男性',
      location: '大阪府',
      rating: 5,
      avatar: '👨',
      comment:
        '町中華で食べる味そのもの。醤油の香ばしさと出汁の風味が絶妙です。リピート確定です！',
    },
    {
      name: '佐藤 花子',
      age: '60代女性',
      location: '神奈川県',
      rating: 5,
      avatar: '👵',
      comment:
        '化学調味料不使用なので安心して食べられます。素材の味がしっかり感じられて、とても美味しいです。',
    },
  ]);

  protected getStars(count: number): number[] {
    return Array(count).fill(0);
  }
}
