import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-gray-900 text-gray-300" role="contentinfo">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="md:col-span-1 animate-fade-in-up">
            <h2 class="text-2xl font-bold text-white mb-4 transition-colors hover:text-orange-400">
              🍳 和風チャーハン
            </h2>
            <p class="text-sm leading-relaxed">
              創業40年の伝統の味を<br />
              ご家庭でお楽しみください。
            </p>
            <ul class="mt-4 flex gap-4" role="list" aria-label="SNSリンク">
              @for (social of socialLinks(); track social.label; let i = $index) {
                <li>
                  <a
                    [href]="social.href"
                    [attr.aria-label]="social.label + 'へのリンク'"
                    class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-all hover-scale animate-fade-in-up"
                    [style.animation-delay]="(i * 0.1 + 0.2) + 's'"
                  >
                    <span aria-hidden="true">{{ social.icon }}</span>
                  </a>
                </li>
              }
            </ul>
          </div>

          @for (section of footerSections(); track section.title; let sectionIndex = $index) {
            <nav
              [attr.aria-label]="section.title"
              class="animate-fade-in-up"
              [style.animation-delay]="(sectionIndex * 0.1 + 0.3) + 's'"
            >
              <h3 class="text-white font-bold mb-4 transition-colors hover:text-orange-400">{{ section.title }}</h3>
              <ul class="space-y-2" role="list">
                @for (link of section.links; track link.label) {
                  <li>
                    <a
                      [href]="link.href"
                      class="text-sm hover:text-orange-400 transition-all hover:translate-x-1 inline-block"
                    >
                      {{ link.label }}
                    </a>
                  </li>
                }
              </ul>
            </nav>
          }
        </div>

        <div class="border-t border-gray-800 mt-12 pt-8 animate-fade-in-up" style="animation-delay: 0.6s;">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm text-gray-500">
              &copy; {{ currentYear }} 和風チャーハン本舗. All rights reserved.
            </p>
            <nav aria-label="フッター法的情報リンク">
              <ul class="flex gap-6 text-sm" role="list">
                <li>
                  <a href="#" class="hover:text-orange-400 transition-all hover:underline">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-orange-400 transition-all hover:underline">
                    特定商取引法に基づく表記
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-orange-400 transition-all hover:underline">
                    利用規約
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly socialLinks = signal([
    { label: 'Twitter', href: '#', icon: '𝕏' },
    { label: 'Instagram', href: '#', icon: '📷' },
    { label: 'LINE', href: '#', icon: '💬' },
  ]);

  protected readonly footerSections = signal<FooterSection[]>([
    {
      title: '商品情報',
      links: [
        { label: '和風チャーハンについて', href: '#about' },
        { label: '素材へのこだわり', href: '#features' },
        { label: 'よくあるご質問', href: '#' },
      ],
    },
    {
      title: 'お買い物ガイド',
      links: [
        { label: 'ご注文方法', href: '#' },
        { label: 'お届けについて', href: '#' },
        { label: 'お支払い方法', href: '#' },
        { label: '返品・交換について', href: '#' },
      ],
    },
    {
      title: 'お問い合わせ',
      links: [
        { label: 'お問い合わせフォーム', href: '#' },
        { label: '電話: 0120-XXX-XXX', href: 'tel:0120000000' },
        { label: '営業時間: 9:00〜18:00', href: '#' },
      ],
    },
  ]);
}
