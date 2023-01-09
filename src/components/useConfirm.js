/** useConfirm */
export const useConfirm = (message = "", onConfirm, onCancel) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm()
    }
    else {
      onCancel()
    }
  }
  return ((!onConfirm || typeof onConfirm !== "function" ) && (onCancel && typeof onCancel !== "function")) ? undefined : confirmAction
}