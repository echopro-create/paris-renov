import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ label: 'Accueil', href: '/' }, ...items];

  return (
    <nav aria-label="Fil d'Ariane" className="py-4 px-6">
      <ol
        className="flex items-center flex-wrap gap-1 text-sm text-slate-500 dark:text-slate-400 max-w-7xl mx-auto"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li
              key={index}
              className="flex items-center gap-1"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index === 0 && (
                <Home size={13} className="text-gold-500 shrink-0" />
              )}

              {!isLast && item.href ? (
                <Link
                  to={item.href}
                  className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors font-medium"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span
                  className="text-slate-700 dark:text-slate-200 font-semibold"
                  itemProp="name"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}

              <meta itemProp="position" content={String(index + 1)} />

              {!isLast && (
                <ChevronRight size={13} className="text-gold-400 shrink-0" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
