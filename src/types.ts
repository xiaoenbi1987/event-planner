export type CategoryId =
  | 'venue'
  | 'photographer'
  | 'dj'
  | 'makeup'
  | 'chef'

export type Category = {
  id: CategoryId
  label: string
  /** Short line shown under the category name on Plan. */
  hint: string
}

export type Review = {
  author: string
  rating: number
  text: string
}

export type Vendor = {
  id: string
  category: CategoryId
  name: string
  /** One-line meta: style, capacity, experience — shown in the list. */
  meta: string
  /** Hourly rate in whole dollars. */
  rate: number
  bio: string
  /** Caption printed on the striped image placeholder. */
  placeholder: string
  slots: string[]
  reviews: Review[]
}

export type EventType = 'wedding' | 'birthday' | 'anniversary' | 'graduation'

/** The global frame the user sets on the Plan screen. */
export type EventDetails = {
  type: EventType
  date: string
  city: string
  guests: number
  budget: number
}

/** One booked vendor — at most one per category. */
export type Selection = {
  category: CategoryId
  vendorId: string
  hours: number
  startTime: string
}

export type Plan = {
  details: EventDetails
  selections: Selection[]
}
