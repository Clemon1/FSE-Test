/* eslint-disable react/prop-types */
export const Form2 = ({ form, setForm }) => {
  const banks = [
    { id: "1", name: "Access Bank", code: "044" },
    { id: "2", name: "Citibank", code: "023" },
    { id: "3", name: "Diamond Bank", code: "063" },
    { id: "4", name: "Dynamic Standard Bank", code: "" },
    { id: "5", name: "Ecobank Nigeria", code: "050" },
    { id: "6", name: "Fidelity Bank Nigeria", code: "070" },
    { id: "7", name: "First Bank of Nigeria", code: "011" },
    { id: "8", name: "First City Monument Bank", code: "214" },
    { id: "9", name: "Guaranty Trust Bank", code: "058" },
    { id: "10", name: "Heritage Bank Plc", code: "030" },
    { id: "11", name: "Jaiz Bank", code: "301" },
    { id: "12", name: "Keystone Bank Limited", code: "082" },
    { id: "13", name: "Providus Bank Plc", code: "101" },
    { id: "14", name: "Polaris Bank", code: "076" },
    { id: "15", name: "Stanbic IBTC Bank Nigeria Limited", code: "221" },
    { id: "16", name: "Standard Chartered Bank", code: "068" },
    { id: "17", name: "Sterling Bank", code: "232" },
    { id: "18", name: "Suntrust Bank Nigeria Limited", code: "100" },
    { id: "19", name: "Union Bank of Nigeria", code: "032" },
    { id: "20", name: "United Bank for Africa", code: "033" },
    { id: "21", name: "Unity Bank Plc", code: "215" },
    { id: "22", name: "Wema Bank", code: "035" },
    { id: "23", name: "Zenith Bank", code: "057" },
  ];
  return (
    <div className='formInputBody'>
      <h4 className='textTitle2'>Bank Details</h4>
      <div className='flex-container'>
        <div className='input-body'>
          <label>Do you have a Smartphone?</label>
          <div className='flex-container2'>
            <label htmlFor='radioId' className='radioLabel'>
              <input
                type='radio'
                id='radioId'
                checked={form.smartPhone === true}
                className='radio1'
                onChange={() => setForm({ ...form, smartPhone: true })}
              />
              <span></span>
              Yes
            </label>
            <label htmlFor='radioId1' className='radioLabel'>
              <input
                type='radio'
                id='radioId1'
                checked={form.smartPhone === false}
                className='radio1'
                onChange={() => setForm({ ...form, smartPhone: false })}
              />
              <span></span>
              No
            </label>
          </div>
        </div>
      </div>
      <div className='flex-container'>
        <div className='input-body'>
          <label>Do you have a Bank Account?</label>
          <div className='flex-container2'>
            <label htmlFor='radioId3' className='radioLabel'>
              <input
                type='radio'
                id='radioId3'
                checked={form.hasBankAccount === true}
                className='radio1'
                onChange={() => setForm({ ...form, hasBankAccount: true })}
              />
              <span></span>
              Yes
            </label>
            <label htmlFor='radioId4' className='radioLabel'>
              <input
                type='radio'
                id='radioId4'
                checked={form.hasBankAccount === false}
                className='radio1'
                onChange={() => setForm({ ...form, hasBankAccount: false })}
              />
              <span></span>
              No
            </label>
          </div>
        </div>
      </div>

      <div
        className='flex-container3'
        style={{
          height: form.hasBankAccount === true ? "fit-content" : "0px",
          transform:
            form.hasBankAccount === true
              ? "translateY(0px)"
              : "translateY(-20px)",
        }}>
        {form.hasBankAccount === true && (
          <>
            <div className='flex-container'>
              <div className='input-body'>
                <label>Bank Name</label>
                <select
                  className='inputElem'
                  value={form.bankName}
                  placeholder='Select Bank'
                  onChange={(e) =>
                    setForm({
                      ...form,

                      bankName: e.target.value,
                    })
                  }>
                  <option>Select Bank</option>
                  {banks.map((bank) => (
                    <option key={bank.id} value={bank.name}>
                      {bank.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='flex-container'>
              <div className='input-body'>
                <label>Personal Bank Account Number</label>
                <input
                  className='inputElem'
                  type='text'
                  placeholder='Account Number'
                  value={form.accountNumber}
                  onChange={(e) =>
                    setForm({
                      ...form,

                      accountNumber: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
