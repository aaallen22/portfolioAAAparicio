function calculateGuestsPerTable(totalGuest, totalTable){
  let first_GuestPerTable = Math.floor(totalGuest/totalTable);
  let remainingGuests = totalGuest % totalTable;
  let remainder_Table = 0;
  let remainingGuests_count = remainingGuests

  while(remainingGuests_count > 0){
    remainder_Table += 1;
    remainingGuests_count -= 1;
  };
  let floor_table = totalTable - remainder_Table;
  let oddGuestsPerTable = first_GuestPerTable + 1;

  if (remainingGuests == 0){
    let result = alert("Your " + totalGuest + " guests will be seated as follows: " + 
    floor_table + " table(s) of " + first_GuestPerTable + ".");
  }
    else{
      let result = alert("Your " + totalGuest + " guests will be seated as follows: " + 
      floor_table + " table(s) of " + first_GuestPerTable + " and " + 
      remainder_Table + " table(s) of " + oddGuestsPerTable + ".");
    }
  
  return result;
   };