import { fetchUsers } from "@/api/user";
import { computed, ref } from "vue";
import { User } from "../interfaces/users";
import { UserGenders } from "@/enums/users";

export const useUsers = () => {
  const isLoading = ref<boolean>(false);
  const allUsers = ref<User[]>([]);
  const isWomen = ref<boolean>(true);
  const test = ref<boolean>(true);

  const getUsers = async (): Promise<void> => {
    try {
      isLoading.value = true;
      const response = await fetchUsers();
      // console.log(
      //   response.data.results.map((item) => ({
      //     firstname: item.name.first,
      //     lastname: item.name.last,
      //     picture: item.picture.medium,
      //     gender: item.gender,
      //   }))
      // );
      allUsers.value = (response.data.results as any[]).map((item) => ({
        firstname: item.name.first,
        lastname: item.name.last,
        picture: item.picture.medium,
        gender: item.gender,
      }));
    } catch (error) {
      console.error(error);
    }
    isLoading.value = false;
  };

  const allMen = computed<User[]>(() => allUsers.value.filter((user) => user.gender === UserGenders.MALE));
  const allWomen = computed<User[]>(() => {
    return allUsers.value.filter((user) => user.gender === UserGenders.FEMALE);
  });

  const switchedList = computed<User[]>(() =>
    allUsers.value.filter(
      (user) => user.gender === `${isWomen.value ? UserGenders.FEMALE : UserGenders.MALE}`
    )
  );

  const switchUsers = (): boolean => (isWomen.value = !isWomen.value);

  return { isLoading, allUsers, allMen, allWomen, getUsers, switchedList, switchUsers };
};
