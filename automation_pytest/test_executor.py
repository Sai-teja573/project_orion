import glob
import os
import pytest

test_folders =  glob.glob('tests**/', recursive=True)
for folder in test_folders:
    test_files = glob.glob(os.path.join(folder, 'test_*.py'))
    if test_files:
        pytest.main(test_files)
