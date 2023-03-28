import { AdjustmentsVerticalIcon, DocumentIcon } from "@heroicons/react/24/outline";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const navigation = [
  { name: 'Dashboard', icon: AdjustmentsVerticalIcon, href: '/', current: false, },
  { name: 'My Projects', icon: DocumentIcon, current: false, href: '/',}
  ]
