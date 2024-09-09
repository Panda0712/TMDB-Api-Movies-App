function Button({ icon, children, onClick = null, className }) {
  if (icon)
    return (
      <button onClick={onClick} className={className}>
        <i class="fa-solid fa-play"></i>
        <span>{children}</span>
      </button>
    );

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
