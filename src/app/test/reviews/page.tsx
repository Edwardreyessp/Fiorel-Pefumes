import { Suspense } from "react"
import { ReviewsGet } from "./ReviewsGet"
import { ReviewsPut } from "./ReviewsPut"

function page(): JSX.Element {
  return (
    <div>
      <h1>Review</h1>
      <ReviewsPut />
      <Suspense fallback={<div>Loading...</div>}>
        <ReviewsGet />
      </Suspense>
    </div>
  )
}

export default page