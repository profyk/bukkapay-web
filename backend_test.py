import requests
import sys
from datetime import datetime

class BukkaPayAPITester:
    def __init__(self, base_url="https://top-tier-web-1.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if response.content:
                    try:
                        print(f"Response: {response.json()}")
                    except:
                        print(f"Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text}")

            return success, response.json() if success and response.content else {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            return False, {}
        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection error")
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_health_check(self):
        """Test the main health check endpoint"""
        success, response = self.run_test(
            "API Health Check",
            "GET",
            "api/",
            200
        )
        return success

    def test_create_status_check(self):
        """Test creating a status check"""
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        
        success, response = self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,
            data=test_data
        )
        
        if success and 'id' in response:
            print(f"Created status check with ID: {response['id']}")
            return True, response['id']
        return False, None

    def test_get_status_checks(self):
        """Test getting all status checks"""
        success, response = self.run_test(
            "Get Status Checks",
            "GET",
            "api/status",
            200
        )
        
        if success:
            print(f"Retrieved {len(response)} status checks")
        return success

def main():
    print("🚀 Starting BukkaPay API Tests...")
    print("=" * 50)
    
    # Setup
    tester = BukkaPayAPITester()

    # Run tests
    print("\n📋 Testing Core API Endpoints...")
    
    # Test health check
    health_success = tester.test_health_check()
    if not health_success:
        print("❌ Health check failed - API may be down")
        print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
        return 1

    # Test status check creation
    create_success, status_id = tester.test_create_status_check()
    
    # Test status check retrieval
    get_success = tester.test_get_status_checks()

    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())