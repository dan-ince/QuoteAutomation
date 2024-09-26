document.addEventListener('DOMContentLoaded', function () {
    const addRowButton = document.getElementById('addRow');
    if (addRowButton) {
        const quotationTable = document.querySelector('.cosy-glazing-quotation table tbody');

        addRowButton.addEventListener('click', function () {
            const newRow = document.createElement('tr');

            newRow.innerHTML = `
                <td><input type="text" name="win_no[]" class="form-control" required></td>
                <td>
                    <select name="unit[]" class="form-select" required>
                        <option value="" selected disabled>Select Unit</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                </td>
                <td>
                    <select name="l_r_t_b[]" class="form-select" required>
                        <option value="" selected disabled>Select</option>
                        <option value="L">L</option>
                        <option value="R">R</option>
                        <option value="T">T</option>
                        <option value="B">B</option>
                    </select>
                </td>
                <td>
                    <select name="type[]" class="form-select" required>
                        <option value="" selected disabled>Select Type</option>
                        <option value="SI">SI</option>
                        <option value="SF">SF</option>
                        <option value="CF">CF</option>
                        <option value="CC">CC</option>
                        <option value="FF">FF</option>
                    </select>
                </td>
                <td><input type="text" name="location[]" class="form-control" required></td>
                <td><input type="number" name="w_mm[]" class="form-control" required></td>
                <td><input type="number" name="h_mm[]" class="form-control" required></td>
                <td><input type="text" name="moisture_reading[]" class="form-control" required></td>
                <td><input type="text" name="sash_stop[]" class="form-control"></td>
                <td><input type="text" name="window_colour[]" class="form-control"></td>
                <td><input type="text" name="trim_details[]" class="form-control"></td>
                <td><input type="text" name="sq_bead[]" class="form-control"></td>
                <td><input type="text" name="c_catch[]" class="form-control"></td>
                <td><input type="text" name="c_stay[]" class="form-control"></td>
                <td><input type="text" name="normal_stay[]" class="form-control"></td>
                <td><input type="text" name="locking_stay_pin[]" class="form-control"></td>
                <td><input type="text" name="move_catch[]" class="form-control"></td>
                <td><input type="text" name="move_stay[]" class="form-control"></td>
                <td><input type="text" name="base_supports[]" class="form-control"></td>
                <td><input type="text" name="safety_clips[]" class="form-control"></td>
                <td><input type="text" name="cut_out[]" class="form-control"></td>
                <td><input type="text" name="cut_angle[]" class="form-control"></td>
            `;

            quotationTable.appendChild(newRow);
        });
    }
});