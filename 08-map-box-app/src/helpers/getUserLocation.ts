export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise(( resolve, reject ) => {
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        resolve([ coords.longitude, coords.latitude ]);
      },
      (err) => {
        alert("We can't obtain your current position")
        console.log({ err });
        reject();
      }
    )
  });
}