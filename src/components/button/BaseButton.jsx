export function BaseButton({
   bgColor,
   border,
   padding,
   foreGround,
   onClick,
   children,
}) {
   const style = {
      border: border,
      backgroundColor: bgColor,
      color: foreGround,
      padding: padding,
   };
   return (
      <button style={style} onClick={() => onClick()}>
         {children}
      </button>
   );
}
