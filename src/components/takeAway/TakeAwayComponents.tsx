import MethodHeader from '@/components/component/Header/MethodHeader'
import HorizontalMenu from '@/components/Menu/horizontalMenu/HorizontalMenu'
import VerticalMenu from '@/components/Menu/verticalMenu/VerticalMenu'
import Search from '@/components/component/search/Search'

const TakeAwayComponents = () => {
  return (
    <div className='text-white'>
      {/* Header Component ☑️
        -back icon on left
        -Method name on left
        -cart on right
        -Profile on right
      */}

      {/* Search Component ☑️ */}

      {/* Menu Component   ☑️
        -Tag lists
        -Items vertical view (fetch all items)
      */}

      {/* Combination Menu  ☑️
        -Items horizontal view
      */}

      <div className='bg-primaryColor'>

        {/* Header */}
        <div ><MethodHeader /></div>
        <div className='min-h-[10vh]'></div>

        {/* Search */}
        <div className='mx-5 flex  justify-center '><Search /></div>
        
        {/* Horizontal Menu */}
        <HorizontalMenu />

        {/* Vertical Menu */}
        <VerticalMenu />

        {/* TODO
          -Add functionality to each components

          -Add toaster for feedback
          
          -When user click + it gets added to the cart
         */}

      </div>
    </div>
  )
}

export default TakeAwayComponents
