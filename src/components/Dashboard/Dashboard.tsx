interface DashBoardProps {
    children: React.ReactNode
}





function DashBoard({children}: DashBoardProps){
    return (
        <>           
          <div id= "taskDashboard">
            {children}
          </div>
        </>
  
    )
}
export default DashBoard