import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        is_paid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} successfully checked in`);
      queryClient.invalidateQueries("booking", data.id);
      navigate(`/bookings/`);
    },
    onError: () => {
      toast.error("Error checking in");
    },
  });
  return { checkin, isCheckingIn };
}
